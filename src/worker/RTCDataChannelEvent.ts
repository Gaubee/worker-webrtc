import { wrap, Remote } from 'comlink'
export class WorkerRTCDataChannelEvent extends Event {
    public readonly channel?: Remote<RTCDataChannel>

    constructor(private config: WorkerWebRTC.RTCDataChannelEventConfig) {
        super(config.type);
        this.channel = wrap<RTCDataChannel>(config.channel)
    }

    get [Symbol.toStringTag]() {
        return 'RTCDataChannelEvent';
    }
}
