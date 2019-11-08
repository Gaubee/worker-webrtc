import { WorkerRTCIceCandidate } from './RTCIceCandidate.js';

export class WorkerRTCPeerConnectionIceEvent extends Event {
  public readonly candidate?: WorkerRTCIceCandidate

  constructor(private config: WorkerWebRTC.RTCPeerConnectionIceEventConfig) {
    super(config.type);
    this.candidate = config.candidate && new WorkerRTCIceCandidate(config.candidate)
  }

  get [Symbol.toStringTag]() {
    return 'RTCPeerConnectionIceEvent';
  }
}
