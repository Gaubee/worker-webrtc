"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function string(obj) {
    return typeof obj === 'string';
}
exports.string = string;
function number(obj) {
    return typeof obj === 'number' && !Number.isNaN(obj);
}
exports.number = number;
function object(obj) {
    return typeof obj === 'object';
}
exports.object = object;
function _undefined(obj) {
    return obj === undefined;
}
exports.undefined = _undefined;
function _null(obj) {
    return obj === null;
}
exports.null = _null;
function _function(obj) {
    return typeof obj === 'function';
}
exports._function = _function;
exports.function = _function;
function includes(arr, val) {
    return arr.includes(val);
}
exports.includes = includes;
function array(arr) {
    return Array.isArray(arr);
}
exports.array = array;
function url(string) {
    try {
        new URL(string);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.url = url;
function blob(val) {
    return val instanceof Blob;
}
exports.blob = blob;
function arrayBuffer(val) {
    return val instanceof ArrayBuffer;
}
exports.arrayBuffer = arrayBuffer;
function arrayBufferView(val) {
    return ArrayBuffer.isView(val);
}
exports.arrayBufferView = arrayBufferView;
