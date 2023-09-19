declare const capabilities: {
    readonly models: readonly [{
        readonly model: "MP-4200 TH";
        readonly profile: "bematech";
    }, {
        readonly model: "MP-2800 TH";
        readonly profile: "bematech";
        readonly columns: 48;
        readonly feed: 4;
        readonly fonts: readonly [{
            readonly name: "Font A";
            readonly columns: 48;
        }, {
            readonly name: "Font B";
            readonly columns: 64;
        }];
    }, {
        readonly model: "MP-2500 TH";
        readonly profile: "bematech";
        readonly feed: 6;
    }, {
        readonly model: "MP-2100 TH";
        readonly profile: "bematech";
        readonly feed: 6;
    }, {
        readonly model: "MP-4000 TH";
        readonly profile: "bematech";
    }, {
        readonly model: "MP-5100 TH";
        readonly profile: "bematech";
    }, {
        readonly model: "MP-100S TH";
        readonly profile: "bematech";
    }, {
        readonly model: "MP-20 MI";
        readonly profile: "bematech";
    }, {
        readonly model: "TM-T20";
        readonly profile: "epson";
        readonly columns: 48;
        readonly fonts: readonly [{
            readonly name: "Font 1";
            readonly columns: 42;
        }, {
            readonly name: "Font A";
            readonly columns: 48;
        }, {
            readonly name: "Font 2";
            readonly columns: 60;
        }, {
            readonly name: "Font B";
            readonly columns: 64;
        }];
    }, {
        readonly model: "TM-T81";
        readonly profile: "epson";
    }, {
        readonly model: "TM-T88";
        readonly profile: "epson";
    }, {
        readonly model: "I9";
        readonly profile: "elgin";
        readonly columns: 48;
        readonly feed: 4;
        readonly fonts: readonly [{
            readonly name: "Font A";
            readonly columns: 48;
        }, {
            readonly name: "Font B";
            readonly columns: 64;
        }];
    }, {
        readonly model: "I7";
        readonly profile: "elgin";
    }, {
        readonly model: "VOX";
        readonly profile: "elgin";
    }, {
        readonly model: "VOX+";
        readonly profile: "elgin";
    }, {
        readonly model: "NIX";
        readonly profile: "elgin";
    }, {
        readonly model: "DR800";
        readonly profile: "daruma";
        readonly feed: 2;
    }, {
        readonly model: "DR700";
        readonly profile: "daruma";
    }, {
        readonly model: "DR600";
        readonly profile: "daruma";
    }, {
        readonly model: "DS348";
        readonly profile: "daruma";
    }, {
        readonly model: "DS300";
        readonly profile: "daruma";
    }, {
        readonly model: "TSP-143";
        readonly profile: "diebold";
    }, {
        readonly model: "IM453";
        readonly profile: "diebold";
    }, {
        readonly model: "IM433";
        readonly profile: "diebold";
    }, {
        readonly model: "IM402";
        readonly profile: "diebold";
    }, {
        readonly model: "IM113";
        readonly profile: "diebold";
    }, {
        readonly model: "IM833";
        readonly profile: "diebold";
        readonly name: "Mecaf Perfecta";
    }, {
        readonly model: "SI-300L";
        readonly profile: "sweda";
    }, {
        readonly model: "SI-300S";
        readonly profile: "sweda";
    }, {
        readonly model: "SI-300W";
        readonly profile: "sweda";
    }, {
        readonly model: "SI-250";
        readonly profile: "sweda";
    }, {
        readonly model: "E-3202";
        readonly profile: "dataregis";
    }, {
        readonly model: "DT200";
        readonly profile: "dataregis";
    }, {
        readonly model: "PrintiD";
        readonly profile: "controlid";
        readonly name: "Print iD";
    }, {
        readonly model: "PrintiD-Touch";
        readonly profile: "controlid";
        readonly name: "Print iD Touch";
    }, {
        readonly model: "Q4";
        readonly profile: "tectoy";
    }, {
        readonly model: "PertoPrinter";
        readonly profile: "perto";
        readonly name: "Perto Printer";
    }, {
        readonly model: "CMP-20";
        readonly profile: "generic";
        readonly brand: "Citizen";
    }, {
        readonly model: "POS-80";
        readonly profile: "generic";
        readonly columns: 48;
        readonly fonts: readonly [{
            readonly name: "Font A";
            readonly columns: 48;
        }, {
            readonly name: "Font B";
            readonly columns: 56;
        }];
    }, {
        readonly model: "POS-58";
        readonly profile: "generic";
    }, {
        readonly model: "CX58D";
        readonly profile: "generic";
    }];
    readonly profiles: {
        readonly epson: {
            readonly brand: "Epson";
            readonly columns: 42;
            readonly feed: 3;
            readonly codepage: "cp850";
            readonly fonts: readonly [{
                readonly name: "Font A";
                readonly columns: 42;
            }, {
                readonly name: "Font B";
                readonly columns: 56;
            }];
            readonly codepages: {
                readonly cp437: "\u001Bt\0";
                readonly cp930: "\u001Bt\u0001";
                readonly cp850: "\u001Bt\u0002";
                readonly cp860: "\u001Bt\u0003";
                readonly cp863: "\u001Bt\u0004";
                readonly cp865: "\u001Bt\u0005";
                readonly cp1252: "\u001Bt\u0010";
                readonly cp866: "\u001Bt\u0011";
                readonly cp852: "\u001Bt\u0012";
                readonly cp858: "\u001Bt\u0013";
            };
        };
        readonly bematech: {
            readonly brand: "Bematech";
            readonly columns: 50;
            readonly feed: 0;
            readonly codepage: "cp850";
            readonly fonts: readonly [{
                readonly name: "Font A";
                readonly columns: 42;
            }, {
                readonly name: "Font C";
                readonly columns: 50;
            }, {
                readonly name: "Font B";
                readonly columns: 56;
            }];
            readonly initialize: "\u001Dù50";
            readonly codepages: {
                readonly cp850: "\u001Bt\u0002";
                readonly cp437: "\u001Bt\u0003";
                readonly cp860: "\u001Bt\u0004";
                readonly cp858: "\u001Bt\u0005";
                readonly cp866: "\u001Bt\u0006";
                readonly cp864: "\u001Bt\u0007";
                readonly utf8: "\u001Bt\b";
                readonly big5e: "\u001Bt\t";
                readonly jis: "\u001Bt\n";
                readonly shiftjis: "\u001Bt\v";
                readonly gb2312: "\u001Bt\f";
            };
        };
        readonly elgin: {
            readonly profile: "epson";
            readonly brand: "Elgin";
            readonly feed: 2;
            readonly codepages: {
                readonly cp1252: "\u001Bt\u0001";
                readonly cp850: "\u001Bt\u0002";
                readonly cp437: "\u001Bt\u0003";
                readonly cp860: "\u001Bt\u0004";
                readonly cp858: "\u001Bt\u0005";
            };
        };
        readonly sweda: {
            readonly profile: "elgin";
            readonly feed: 8;
            readonly brand: "Sweda";
        };
        readonly dataregis: {
            readonly profile: "elgin";
            readonly brand: "Dataregis";
        };
        readonly daruma: {
            readonly brand: "Daruma";
            readonly profile: "epson";
            readonly columns: 48;
            readonly feed: 8;
            readonly codepage: "cp1252";
            readonly fonts: readonly [{
                readonly name: "Font A";
                readonly columns: 48;
            }, {
                readonly name: "Font B";
                readonly columns: 52;
            }];
            readonly codepages: {
                readonly iso88591: "\u001Bt\u0001";
                readonly cp850: "\u001Bt\u0002";
                readonly cp1252: "\u001Bt\u0003";
                readonly cp437: "\u001Bt\u0004";
            };
        };
        readonly diebold: {
            readonly brand: "Diebold";
            readonly profile: "daruma";
            readonly codepages: {
                readonly cp1252: "";
            };
        };
        readonly controlid: {
            readonly profile: "epson";
            readonly brand: "ControliD";
            readonly columns: 48;
            readonly feed: 0;
            readonly fonts: readonly [{
                readonly name: "Font C";
                readonly columns: 48;
            }, {
                readonly name: "Font A";
                readonly columns: 48;
            }, {
                readonly name: "Font B";
                readonly columns: 64;
            }];
        };
        readonly perto: {
            readonly profile: "elgin";
            readonly brand: "Perto";
            readonly columns: 48;
            readonly codepage: "cp850";
            readonly fonts: readonly [{
                readonly name: "Font A";
                readonly columns: 48;
            }, {
                readonly name: "Font B";
                readonly columns: 57;
            }];
        };
        readonly tectoy: {
            readonly profile: "epson";
            readonly brand: "TecToy";
            readonly columns: 48;
            readonly feed: 4;
            readonly fonts: readonly [{
                readonly name: "Font A";
                readonly columns: 48;
            }, {
                readonly name: "Font B";
                readonly columns: 56;
            }];
        };
        readonly generic: {
            readonly brand: "Generic";
            readonly codepage: "cp850";
            readonly columns: 32;
            readonly fonts: readonly [{
                readonly name: "Font A";
                readonly columns: 32;
            }, {
                readonly name: "Font B";
                readonly columns: 42;
            }];
            readonly initialize: "\u001BR\f";
            readonly codepages: {
                readonly cp437: "\u001Bt\0";
                readonly cp930: "\u001Bt\u0001";
                readonly cp850: "\u001Bt\u0002";
                readonly cp860: "\u001Bt\u0003";
                readonly cp863: "\u001Bt\u0004";
                readonly cp865: "\u001Bt\u0005";
                readonly cp1252: "\u001Bt\u0006";
                readonly cp866: "\u001Bt\u0007";
                readonly cp852: "\u001Bt\b";
                readonly cp858: "\u001Bt\t";
                readonly cp1253: "\u001Bt\n";
                readonly cp737: "\u001Bt\v";
                readonly cp857: "\u001Bt\f";
                readonly iso88599: "\u001Bt\r";
                readonly cp864: "\u001Bt\u000E";
                readonly cp862: "\u001Bt\u000F";
                readonly iso88592: "\u001Bt\u0010";
                readonly cp874: "\u001Bt\u001E";
            };
        };
    };
};
export type Font = {
    name: string;
    columns: number;
};
export type CodePage = {
    code: string;
    command: string;
};
type Models = (typeof capabilities)['models'];
export type Profile = Models[number]['profile'];
export type SupportedModel = Models[number]['model'];
export type Capability = {
    profile: string;
    brand: string;
    model: string;
    name?: string;
    columns: number;
    feed?: number;
    fonts: Font[];
    codepage: string;
    initialize?: string;
    codepages: CodePage[];
};
export default capabilities;
