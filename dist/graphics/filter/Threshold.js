"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Threshold {
    process(image) {
        const width = image.width;
        const height = image.height;
        const new_data = image.data.slice();
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const red = image.data[y * width * 4 + x * 4 + 0];
                const green = image.data[y * width * 4 + x * 4 + 1];
                const blue = image.data[y * width * 4 + x * 4 + 2];
                const alpha = image.data[y * width * 4 + x * 4 + 3];
                const grey = Math.trunc(red * 0.3 + green * 0.59 + blue * 0.11);
                const new_color = grey > 127 ? 0xff : 0;
                new_data[y * width * 4 + x * 4 + 0] = new_color;
                new_data[y * width * 4 + x * 4 + 1] = new_color;
                new_data[y * width * 4 + x * 4 + 2] = new_color;
                new_data[y * width * 4 + x * 4 + 3] = alpha;
            }
        }
        return { width, height, data: new_data };
    }
}
exports.default = Threshold;
//# sourceMappingURL=Threshold.js.map