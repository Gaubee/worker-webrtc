
import RTCSessionDescription from './dist/worker/RTCSessionDescription.js'
export function installWorker(Comlink) {
    Comlink.transferHandlers.set("MasterRTCDataChannel", {
        canHandle: _ => false,
        deserialize: port => Comlink.wrap(port)
    });

    Comlink.transferHandlers.set("MasterRTCSessionDescription", {
        canHandle: _ => false,
        deserialize: json => {
            return new RTCSessionDescription(json)
        }
    });
    Comlink.transferHandlers.set("MasterRTCDataChannelEvent", {
        canHandle: _ => false,
        deserialize: event => {
            const dataChannelEvent = Comlink.transferHandlers.get("Event").deserialize(event);
            dataChannelEvent.channel = Comlink.transferHandlers.get('MasterRTCDataChannel').deserialize(event.channel)
            return dataChannelEvent
        }
    });
    Comlink.transferHandlers.set("MasterMessageEvent", {
        canHandle: _ => false,
        deserialize: event => {
            const messageEvent = Comlink.transferHandlers.get("Event").deserialize(event);
            messageEvent.data = event.data
            return messageEvent
        }
    });

}