declare namespace WorkerWebRTC {
    interface EventConfig {
        type: string;
        bubbles: boolean;
        cancelable: boolean;
        composed: boolean;
    }
    interface RTCDataChannelEventConfig extends EventConfig {
        channel: MessagePort
    }
    interface RTCCertificateConfig {
        expires: number
        fingerprints: RTCDtlsFingerprint[]
    }
    interface RTCIceCandidateConfig {
        candidate: string
        component?: RTCIceComponent
        foundation?: string
        ip?: string
        port?: number
        priority?: number
        protocol?: RTCIceProtocol
        relatedAddress?: string
        relatedPort?: number
        sdpMLineIndex?: number
        sdpMid?: string
        tcpType?: RTCIceTcpCandidateType
        type?: RTCIceCandidateType
        usernameFragment?: string
    }

    interface RTCPeerConnectionIceEventConfig {
        type: string
        candidate?: RTCIceCandidateConfig
    }

    interface RTCSessionDescriptionConfig extends RTCSessionDescriptionInit {

    }
}