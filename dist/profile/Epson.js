"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const actions_1 = require("../actions");
const _1 = require(".");
class Epson extends _1.Profile {
    feed(lines) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (lines > 1) {
                const count = Math.trunc(lines / 255);
                let cmd = ('\x1Bd' + String.fromCharCode(Math.min(lines, 255))).repeat(count);
                const remaining = lines - count * 255;
                if (remaining > 0) {
                    cmd += '\x1Bd' + String.fromCharCode(remaining);
                }
                return this.connection.write(Buffer.from(cmd));
            }
            else {
                return this.connection.write(Buffer.from('\r\n', 'ascii'));
            }
        });
    }
    cutter(_) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.connection.write(Buffer.from('\x1Bm', 'ascii'));
        });
    }
    buzzer() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.connection.write(Buffer.from('\x07', 'ascii'));
        });
    }
    drawer(number, on_time, off_time) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const index = {
                [actions_1.Drawer.First]: 0,
                [actions_1.Drawer.Second]: 1,
            };
            const on_time_char = String.fromCharCode(Math.min(Math.trunc(on_time / 2), 255));
            const off_time_char = String.fromCharCode(Math.min(Math.trunc(off_time / 2), 255));
            const index_char = String.fromCharCode(index[number]);
            return this.connection.write(Buffer.from('\x1Bp' + index_char + on_time_char + off_time_char, 'ascii'));
        });
    }
    setAlignment(align) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cmd = {
                [actions_1.Align.Left]: '\x1Ba0',
                [actions_1.Align.Center]: '\x1Ba1',
                [actions_1.Align.Right]: '\x1Ba2',
            };
            return this.connection.write(Buffer.from(cmd[align], 'ascii'));
        });
    }
    setMode(mode, enable) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let byte = 0b00000000;
            if (this.font.name == 'Font B') {
                byte |= 0b00000001;
            }
            const before = byte;
            if (actions_1.Style.DoubleHeight & mode) {
                byte |= 0b00010000;
            }
            if (actions_1.Style.DoubleWidth & mode) {
                byte |= 0b00100000;
            }
            let mask = 0b00000001;
            if (enable) {
                mask = 0b00110001;
            }
            if (before != byte) {
                return this.connection.write(Buffer.from('\x1B!' + String.fromCharCode(byte & mask), 'ascii'));
            }
        });
    }
    setStyle(style, enable) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (enable) {
                if (actions_1.Style.Condensed == style) {
                    return this.connection.write(Buffer.from('\x1B\x0f', 'ascii'));
                }
                else if (actions_1.Style.Bold == style) {
                    return this.connection.write(Buffer.from('\x1BE1', 'ascii'));
                }
                else if (actions_1.Style.Italic == style) {
                    return this.connection.write(Buffer.from('\x1B4', 'ascii'));
                }
                else if (actions_1.Style.Underline == style) {
                    return this.connection.write(Buffer.from('\x1B-1', 'ascii'));
                }
            }
            else {
                if (actions_1.Style.Underline == style) {
                    return this.connection.write(Buffer.from('\x1B-0', 'ascii'));
                }
                else if (actions_1.Style.Italic == style) {
                    return this.connection.write(Buffer.from('\x1B5', 'ascii'));
                }
                else if (actions_1.Style.Bold == style) {
                    return this.connection.write(Buffer.from('\x1BE0', 'ascii'));
                }
                else if (actions_1.Style.Condensed == style) {
                    return this.connection.write(Buffer.from('\x12', 'ascii'));
                }
            }
        });
    }
    setCharSize({ width = 1, height = 1, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            width = Math.max(1, Math.min(width, 8));
            height = Math.max(1, Math.min(height, 8));
            const n = (height - 1) | ((width - 1) << 4);
            return this.connection.write(Buffer.from(`\x1D!${String.fromCharCode(n)}`, 'ascii'));
        });
    }
    qrcode(data, size) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tipo = '2';
            const _size = String.fromCharCode(size || 4);
            const error = '0';
            const len = data.length + 3;
            const pL = String.fromCharCode(len & 0xff);
            const pH = String.fromCharCode((len >> 8) & 0xff);
            yield this.connection.write(Buffer.from('\x1D(k\x04\x001A' + tipo + '\x00', 'ascii'));
            yield this.connection.write(Buffer.from('\x1D(k\x03\x001C' + _size, 'ascii'));
            yield this.connection.write(Buffer.from('\x1D(k\x03\x001E' + error, 'ascii'));
            yield this.connection.write(Buffer.from('\x1D(k' + pL + pH + '1P0', 'ascii'));
            yield this.connection.write(Buffer.from(data, 'ascii'));
            return this.connection.write(Buffer.from('\x1D(k\x03\x001Q0', 'ascii'));
        });
    }
    fontChanged(current, previous) {
        const _super = Object.create(null, {
            fontChanged: { get: () => super.fontChanged }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (current.name == 'Font A') {
                yield this.connection.write(Buffer.from('\x1BM\x00', 'ascii'));
            }
            else {
                yield this.connection.write(Buffer.from('\x1BM\x01', 'ascii'));
            }
            return _super.fontChanged.call(this, current, previous);
        });
    }
}
exports.default = Epson;
//# sourceMappingURL=Epson.js.map