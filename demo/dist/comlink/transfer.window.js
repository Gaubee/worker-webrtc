"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function installMaster(Comlink) {
    const { transferHandlers } = Comlink;
    transferHandlers.set("MasterRTCDataChannel", {
        canHandle: obj => obj instanceof RTCDataChannel,
        serialize: dataChannel => {
            const messageChannel = new MessageChannel();
            const dataChannelProxy = Comlink.expose(dataChannel, messageChannel.port1);
            return [messageChannel.port2, [messageChannel.port2]];
        }
    });
    transferHandlers.set("MasterRTCSessionDescription", {
        canHandle: obj => obj instanceof RTCSessionDescription,
        serialize: sessionDescription => {
            return [sessionDescription.toJSON(), []];
        }
    });
    transferHandlers.set("MasterRTCDataChannelEvent", {
        canHandle: obj => obj instanceof RTCDataChannelEvent,
        serialize: event => {
            const [tEvent, ts1] = transferHandlers.get("Event").serialize(event);
            const [channel, ts2] = transferHandlers.get('MasterRTCDataChannel').serialize(event.channel);
            tEvent.channel = channel;
            return [tEvent, ts1.concat(ts2)];
        }
    });
    transferHandlers.set("MasterMessageEvent", {
        canHandle: obj => obj instanceof MessageEvent,
        serialize: event => {
            const [tEvent, ts1] = transferHandlers.get("Event").serialize(event);
            tEvent.data = event.data;
            return [tEvent, ts1];
        }
    });
    transferHandlers.set("MasterRTCCertificate", {
        canHandle: obj => obj instanceof RTCCertificate,
        /**@param {RTCCertificate} cert */
        serialize: cert => {
            return [{
                    expires: cert.expires,
                    fingerprints: cert.getFingerprints()
                }, []];
        }
    });
}
exports.installMaster = installMaster;
