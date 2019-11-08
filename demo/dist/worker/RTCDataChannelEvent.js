"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comlink_1 = require("comlink");
class WorkerRTCDataChannelEvent extends Event {
    constructor(config) {
        super(config.type);
        this.config = config;
        this.channel = comlink_1.wrap(config.channel);
    }
    get [Symbol.toStringTag]() {
        return 'RTCDataChannelEvent';
    }
}
exports.WorkerRTCDataChannelEvent = WorkerRTCDataChannelEvent;
