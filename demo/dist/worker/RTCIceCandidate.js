import * as is from '../utils/is.js';
import assert from '../utils/assert.js';
export default class RTCIceCandidate {
    constructor(config) {
        this.config = config;
        assert(arguments.length, 'Not enough arguments');
        assert(is.undefined(config) || is.object(config), `'${config}' is not an object`);
        const { candidate } = config || {};
        assert(!is.undefined(candidate), `'${candidate}' is not a valid value for candidate`);
    }
    get candidate() { return this.config.candidate; }
    get component() { return this.config.component; }
    get foundation() { return this.config.foundation; }
    get ip() { return this.config.ip; }
    get port() { return this.config.port; }
    get priority() { return this.config.priority; }
    get protocol() { return this.config.protocol; }
    get relatedAddress() { return this.config.relatedAddress; }
    get relatedPort() { return this.config.relatedPort; }
    get sdpMLineIndex() { return this.config.sdpMLineIndex; }
    get sdpMid() { return this.config.sdpMid; }
    get tcpType() { return this.config.tcpType; }
    get type() { return this.config.type; }
    get usernameFragment() { return this.config.usernameFragment; }
    get [Symbol.toStringTag]() {
        return 'RTCIceCandidate';
    }
    toJSON() {
        return {
            sdpMLineIndex: this.sdpMLineIndex,
            candidate: this.candidate,
            sdpMid: this.sdpMid,
            usernameFragment: this.usernameFragment,
        };
    }
}
