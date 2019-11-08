"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkerRTCCertificate {
    constructor(config) {
        this.config = config;
    }
    get expires() { return this.config.expires; }
    get getFingerprints() { return this.config.fingerprints; }
    get [Symbol.toStringTag]() {
        return 'RTCCertificate';
    }
}
exports.WorkerRTCCertificate = WorkerRTCCertificate;
