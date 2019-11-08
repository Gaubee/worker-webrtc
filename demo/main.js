import * as Comlink from "./comlink/esm.mjs";
import { installMaster } from './transfer.master.js'
import { installShare } from './transfer.share.js'
installMaster(Comlink);
installShare(Comlink);

// import * as rtc from './rtc.js'
let rtc;
async function init() {
    const worker = new Worker("worker.js", { type: "module" });
    // WebWorkers use `postMessage` and therefore work with Comlink.
    rtc = Comlink.wrap(worker);

    /// 初始化 WebRTC 到子线程中使用
    initRTC(worker);
}
init();

/**
 * 
 * @param {Worker} baseWorker 
 */
async function initRTC(baseWorker) {
    const channel = new MessageChannel();
    Comlink.expose({
        RTCPeerConnection,
        RTCDataChannel,
        RTCSessionDescription,
        RTCIceCandidate,
        RTCCertificate,
        RTCPeerConnectionIceEvent,
        RTCStatsReport,
    }, channel.port1);
    baseWorker.postMessage('share-message-channel:RTC', [channel.port2])
}

self.getLocalOffer = async function getLocalOffer() {
    offerIO.value = JSON.stringify(await rtc.getLocalOffer())
}
self.setRemoteOffer = async function setRemoteOffer() {
    offerIO.value = JSON.stringify(await rtc.setRemoteOffer(anwserIO.value))
}
self.sendMsg = async function sendMsg() {
    await rtc.sendMsg(messageInput.value)
}