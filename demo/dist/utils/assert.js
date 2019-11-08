"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(val, error) {
    if (val)
        return;
    if (error instanceof Error)
        throw error;
    throw new Error(error);
}
exports.default = default_1;
