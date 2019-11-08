import * as Comlink from "./comlink/esm.mjs";
import { installWorker } from './transfer.worker.js';
import { installShare } from './transfer.share.js'
installWorker(Comlink);
installShare(Comlink);

onmessage = (ev) => {
    const { data } = ev;
    if (typeof data === 'string' && data.startsWith('share-message-channel:')) {
        const cmd = data.replace('share-message-channel:', '');
        if (cmd === 'RTC') {
            const wrtc = Comlink.wrap(ev.ports[0]);
            self.RTCPeerConnection = wrtc.RTCPeerConnection;
            self.RTCDataChannel = wrtc.RTCDataChannel;
            self.RTCSessionDescription = wrtc.RTCSessionDescription;
            self.RTCIceCandidate = wrtc.RTCIceCandidate;
            self.RTCCertificate = wrtc.RTCCertificate;
            self.RTCPeerConnectionIceEvent = wrtc.RTCPeerConnectionIceEvent;
            self.RTCStatsReport = wrtc.RTCStatsReport;
        }
    }

}
import * as rtc from './rtc.js'

Comlink.expose(rtc);