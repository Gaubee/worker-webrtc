"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RTCIceCandidate_js_1 = require("./RTCIceCandidate.js");
class WorkerRTCPeerConnectionIceEvent extends Event {
    constructor(config) {
        super(config.type);
        this.config = config;
        this.candidate = config.candidate && new RTCIceCandidate_js_1.WorkerRTCIceCandidate(config.candidate);
    }
    get [Symbol.toStringTag]() {
        return 'RTCPeerConnectionIceEvent';
    }
}
exports.WorkerRTCPeerConnectionIceEvent = WorkerRTCPeerConnectionIceEvent;
