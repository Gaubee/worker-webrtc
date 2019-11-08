export class WorkerRTCCertificate {
  get expires(): number { return this.config.expires }
  get getFingerprints(): RTCDtlsFingerprint[] { return this.config.fingerprints }
  constructor(private config: WorkerWebRTC.RTCCertificateConfig) {
  }
  get [Symbol.toStringTag]() {
    return 'RTCCertificate';
  }
}
