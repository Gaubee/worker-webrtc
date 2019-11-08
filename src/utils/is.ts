export function string(obj: unknown): obj is string {
  return typeof obj === 'string';
}

export function number(obj: unknown): obj is number {
  return typeof obj === 'number' && !Number.isNaN(obj);
}

export function object(obj: unknown): obj is { [key: string]: any } {
  return typeof obj === 'object';
}

function _undefined(obj: unknown): obj is undefined {
  return obj === undefined;
}
export { _undefined as undefined };

function _null(obj: unknown): obj is null {
  return obj === null;
}
export { _null as null };

export function _function(obj: unknown): obj is Function {
  return typeof obj === 'function';
}
export { _function as function };

export function includes(arr: Array<unknown>, val: unknown) {
  return arr.includes(val);
}

export function array(arr: unknown): arr is Array<any> {
  return Array.isArray(arr);
}

export function url(string: string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

export function blob(val: unknown): val is Blob {
  return val instanceof Blob;
}

export function arrayBuffer(val: unknown): val is ArrayBuffer {
  return val instanceof ArrayBuffer;
}

export function arrayBufferView(val: unknown): val is ArrayBufferView {
  return ArrayBuffer.isView(val);
}
