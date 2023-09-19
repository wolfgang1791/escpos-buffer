"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capabilities_1 = require("./capabilities");
const Bematech_1 = require("./profile/Bematech");
const Epson_1 = require("./profile/Epson");
const ControliD_1 = require("./profile/ControliD");
const Daruma_1 = require("./profile/Daruma");
const Dataregis_1 = require("./profile/Dataregis");
const Diebold_1 = require("./profile/Diebold");
const Elgin_1 = require("./profile/Elgin");
const Generic_1 = require("./profile/Generic");
const Perto_1 = require("./profile/Perto");
const Sweda_1 = require("./profile/Sweda");
const TecToy_1 = require("./profile/TecToy");
const cache = new Map();
class Model {
    constructor(model) {
        if (typeof model === 'string') {
            this._profile = Model.initialiseProfile(Model.EXPAND(Model.FIND(model)));
        }
        else {
            this._profile = model;
        }
    }
    static initialiseProfile(capability) {
        switch (capability.profile) {
            case 'bematech':
                return new Bematech_1.default(capability);
            case 'controlid':
                return new ControliD_1.default(capability);
            case 'daruma':
                return new Daruma_1.default(capability);
            case 'dataregis':
                return new Dataregis_1.default(capability);
            case 'diebold':
                return new Diebold_1.default(capability);
            case 'elgin':
                return new Elgin_1.default(capability);
            case 'generic':
                return new Generic_1.default(capability);
            case 'perto':
                return new Perto_1.default(capability);
            case 'sweda':
                return new Sweda_1.default(capability);
            case 'tectoy':
                return new TecToy_1.default(capability);
            default:
                return new Epson_1.default(capability);
        }
    }
    static ASSIGN_DEFINED(target, ...others) {
        others.forEach((other) => {
            Object.keys(other).forEach((key) => {
                if (other[key] !== undefined) {
                    target[key] = other[key];
                }
            });
        });
        return target;
    }
    static FIND(model) {
        const profile = capabilities_1.default.models.find((profile) => profile['model'] == model);
        if (!profile) {
            throw new Error(`Printer model "${model}" not supported`);
        }
        return profile;
    }
    static EXPAND(profile) {
        const capability = {
            model: undefined,
            profile: undefined,
            brand: undefined,
            columns: undefined,
            fonts: undefined,
            codepage: undefined,
            codepages: undefined,
        };
        if (cache.has(profile['model'])) {
            return cache.get(profile['model']);
        }
        Model.ASSIGN_DEFINED(capability, Model.ASSIGN_DEFINED({}, profile, capability));
        while ('profile' in profile) {
            profile = capabilities_1.default.profiles[profile['profile']];
            Model.ASSIGN_DEFINED(capability, Model.ASSIGN_DEFINED({}, profile, capability));
        }
        capability.codepages = Object.keys(capability.codepages).map((code) => ({
            code,
            command: capability.codepages[code],
        }));
        cache.set(capability.model, capability);
        return capability;
    }
    static ALL() {
        return capabilities_1.default.models.map((profile) => Model.EXPAND(profile));
    }
    get name() {
        return this._profile.name;
    }
    get profile() {
        return this._profile;
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map