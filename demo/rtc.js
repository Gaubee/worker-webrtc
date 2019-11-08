import * as Comlink from "./comlink/esm.mjs";
const proxyFunction = typeof window === 'object' ? o => o : o => Comlink.proxy(o)

/** @type {RTCPeerConnection} */
let pc;
/** @type {RTCDataChannel} */
let dc;
export async function getLocalOffer() {
    pc = await new RTCPeerConnection();
    dc = await pc.createDataChannel('qaq');
    // dc.addEventListener("message", console.log.bind('%cMSG:', 'color:blue'))
    dc.onmessage = proxyFunction(console.log.bind(null, '%cMSG:', 'color:blue'));
    await pc.setLocalDescription(await pc.createOffer())
    return pc.localDescription
}
export async function setRemoteOffer(json) {
    if (pc) {
        await pc.setRemoteDescription(JSON.parse(json));
        return pc.localDescription
    } else {
        pc = await new RTCPeerConnection();
        pc.ondatachannel = proxyFunction(async ev => {
            debugger
            dc = await ev.channel
            dc.onmessage = proxyFunction(console.log.bind(null, '%cMSG:', 'color:red'));
        });

        await pc.setRemoteDescription(JSON.parse(json));
        await pc.setLocalDescription(await pc.createAnswer());
        if (await pc.iceGatheringState !== 'complete') {
            await new Promise((resolve, reject) => pc.addEventListener("icegatheringstatechange", proxyFunction(() => {
                if (pc.iceGatheringState === 'complete') {
                    resolve()
                }
                pc.addEventListener("icecandidateerror", proxyFunction(reject))
            })));
        }
        return pc.localDescription
    }
}
export async function sendMsg(msg) {
    const readyState = await dc.readyState
    console.log(readyState);
    if (readyState === 'open') {
        await dc.send(msg)
    }
}