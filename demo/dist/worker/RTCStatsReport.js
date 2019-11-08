"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RTCStatsReport {
    constructor(entries) {
        this._entries = new Map(entries);
    }
    entries() {
        return this._entries.entries();
    }
    get keys() {
        return this._entries.keys();
    }
    get values() {
        return this._entries.values();
    }
    get forEach() {
        const fun = this._entries.forEach.bind(this._entries);
        Object.defineProperty(this, 'forEach', { value: fun });
        return fun;
    }
    get get() {
        const fun = this._entries.get.bind(this._entries);
        Object.defineProperty(this, 'get', { value: fun });
        return fun;
    }
    get has() {
        const fun = this._entries.has.bind(this._entries);
        Object.defineProperty(this, 'has', { value: fun });
        return fun;
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
exports.default = RTCStatsReport;
