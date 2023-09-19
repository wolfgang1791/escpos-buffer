import Epson from './Epson';
export default class Generic extends Epson {
    protected setMode(mode: number, enable: boolean): Promise<void>;
    qrcode(data: string, size: number): Promise<void>;
}
