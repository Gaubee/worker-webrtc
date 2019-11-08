"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RTCSessionDescription_js_1 = require("../worker/RTCSessionDescription.js");
const RTCCertificate_js_1 = require("../worker/RTCCertificate.js");
function installWorker(Comlink) {
    const { transferHandlers } = Comlink;
    const skipCanHandle = (_) => false;
    transferHandlers.set("MasterRTCDataChannel", {
        canHandle: skipCanHandle,
        deserialize: (port) => Comlink.wrap(port)
    });
    transferHandlers.set("MasterRTCSessionDescription", {
        canHandle: skipCanHandle,
        deserialize: (json) => {
            return new RTCSessionDescription_js_1.WorkerRTCSessionDescription(json);
        }
    });
    transferHandlers.set("MasterRTCDataChannelEvent", {
        canHandle: skipCanHandle,
        deserialize: (event) => {
            const dataChannelEvent = transferHandlers.get("Event").deserialize(event);
            dataChannelEvent.channel = transferHandlers.get('MasterRTCDataChannel').deserialize(event.channel);
            return dataChannelEvent;
        }
    });
    transferHandlers.set("MasterMessageEvent", {
        canHandle: skipCanHandle,
        deserialize: event => {
            const messageEvent = transferHandlers.get("Event").deserialize(event);
            messageEvent.data = event.data;
            return messageEvent;
        }
    });
    transferHandlers.set("MasterRTCCertificate", {
        canHandle: skipCanHandle,
        deserialize: cert => {
            return new RTCCertificate_js_1.WorkerRTCCertificate(cert);
        }
    });
}
exports.installWorker = installWorker;
