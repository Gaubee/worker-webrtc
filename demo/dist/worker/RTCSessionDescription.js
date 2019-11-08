"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkerRTCSessionDescription {
    constructor(config) {
        this.config = config;
    }
    get type() { return this.config.type; }
    get sdp() { return this.config.sdp; }
    get [Symbol.toStringTag]() {
        return 'RTCSessionDescription';
    }
    toJSON() {
        return {
            sdp: this.sdp,
            type: this.type
        };
    }
}
exports.WorkerRTCSessionDescription = WorkerRTCSessionDescription;
