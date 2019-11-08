
export class WorkerRTCSessionDescription {
  get type() { return this.config.type }
  get sdp() { return this.config.sdp }

  constructor(private config: WorkerWebRTC.RTCSessionDescriptionConfig) {

  }


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
