import { RTCSdpType } from './enums.js';
import * as is from '../utils/is.js';
import assert from '../utils/assert.js';

export default class RTCSessionDescription {
  type: string
  sdp: string

  constructor(descriptionInitDict: RTCSessionDescriptionInit) {
    assert(
      is.undefined(descriptionInitDict) || is.object(descriptionInitDict),
      `'${descriptionInitDict}' is not an object`
    );
    const { type, sdp } = descriptionInitDict || {};

    assert(
      is.undefined(type) ||
      is.includes(RTCSdpType, type),
      `'${type}' is not a valid value for type`
    );

    this.type = type || '';
    this.sdp = String(sdp || '');
  }


  get [Symbol.toStringTag]() {
    return 'RTCSessionDescription';
  }

  toJSON() {
    return {
      sdp: this.sdp,
      type: this.type
    };
  }

}
