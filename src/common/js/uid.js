let _uid = ''

export function getUid() {
  if (_uid) {
    return _uid
  }
  if (!_uid) {
    const t = (new Date()).getUTCMilliseconds
    _uid = '' + Math.round(23874875 * Math.random()) * t % 1e10
    return _uid
  }
}
