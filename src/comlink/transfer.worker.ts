
import { WorkerRTCSessionDescription } from '../worker/RTCSessionDescription.js'
import { WorkerRTCCertificate } from '../worker/RTCCertificate.js'
export function installWorker(Comlink: typeof import("comlink")) {
    const { transferHandlers } = Comlink;
    const skipCanHandle = (_: unknown) => false;

    transferHandlers.set("MasterRTCDataChannel", {
        canHandle: skipCanHandle,
        deserialize: (port: MessagePort) => Comlink.wrap(port)
    });

    transferHandlers.set("MasterRTCSessionDescription", {
        canHandle: skipCanHandle,
        deserialize: (json: WorkerWebRTC.RTCSessionDescriptionConfig) => {
            return new WorkerRTCSessionDescription(json)
        }
    });
    transferHandlers.set("MasterRTCDataChannelEvent", {
        canHandle: skipCanHandle,
        deserialize: (event: WorkerWebRTC.RTCDataChannelEventConfig) => {
            const dataChannelEvent = transferHandlers.get("Event").deserialize(event);
            dataChannelEvent.channel = transferHandlers.get('MasterRTCDataChannel').deserialize(event.channel)
            return dataChannelEvent
        }
    });
    transferHandlers.set("MasterMessageEvent", {
        canHandle: skipCanHandle,
        deserialize: event => {
            const messageEvent = transferHandlers.get("Event").deserialize(event);
            messageEvent.data = event.data
            return messageEvent
        }
    });

    transferHandlers.set("MasterRTCCertificate", {
        canHandle: skipCanHandle,
        deserialize: cert => {
            return new WorkerRTCCertificate(cert);
        }
    });
}