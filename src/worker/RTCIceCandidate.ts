import * as is from '../utils/is.js';
import assert from '../utils/assert.js';

export default class RTCIceCandidate {
  get candidate(): string { return this.config.candidate }
  get component(): RTCIceComponent { return this.config.component }
  get foundation(): string { return this.config.foundation }
  get ip(): string { return this.config.ip }
  get port(): number { return this.config.port }
  get priority(): number { return this.config.priority }
  get protocol(): RTCIceProtocol { return this.config.protocol }
  get relatedAddress(): string { return this.config.relatedAddress }
  get relatedPort(): number { return this.config.relatedPort }
  get sdpMLineIndex(): number { return this.config.sdpMLineIndex }
  get sdpMid(): string { return this.config.sdpMid }
  get tcpType(): RTCIceTcpCandidateType { return this.config.tcpType }
  get type(): RTCIceCandidateType { return this.config.type }
  get usernameFragment(): string { return this.config.usernameFragment }

  constructor(private config: any) {
    assert(arguments.length, 'Not enough arguments');
    assert(
      is.undefined(config) || is.object(config),
      `'${config}' is not an object`
    );
    const { candidate } = config || {};

    assert(
      !is.undefined(candidate),
      `'${candidate}' is not a valid value for candidate`
    );

  }

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
