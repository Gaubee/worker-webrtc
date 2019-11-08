export default class RTCStatsReport {
    constructor(entries) {
        this._entries = new Map(entries);
    }
    entries() {
        return this._entries.entries();
    }
    get forEach() {
        return this._entries.forEach.bind(this._entries);
    }
    get get() {
        return this._entries.get.bind(this._entries);
    }
    get has() {
        return this._entries.has.bind(this._entries);
    }
    get keys() {
        return this._entries.keys.bind(this._entries);
    }
    get values() {
        return this._entries.values.bind(this._entries);
    }
    get [Symbol.iterator]() {
        return this.entries;
    }
    get [Symbol.toStringTag]() {
        return 'RTCStatsReport';
    }
    get size() {
        return this._entries.size;
    }
}
