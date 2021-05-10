export function updateAccessToken (state, TAKEITS_SESSION_INFO) {
  if (TAKEITS_SESSION_INFO) {
    state.TAKEITS_SESSION_INFO = TAKEITS_SESSION_INFO
    // state.userFullName = TAKEITS_SESSION_INFO.name + ' ' + TAKEITS_SESSION_INFO.lastName
  } else {
    state.TAKEITS_SESSION_INFO = {}
  }
}
export function saveAudioOne (state, data) {
  //localStorage.setItem('TAKEITS_SESSION_INFO', JSON.stringify(data))
  //state.TAKEITS_SESSION_INFO = data
  console.log(data, 'mut')
  state.audioOne = data
}
export function saveAudioTwo (state, data) {
  //localStorage.setItem('TAKEITS_SESSION_INFO', JSON.stringify(data))
  //state.TAKEITS_SESSION_INFO = data
  console.log(data, 'muta')
  state.audioTwo = data
}

export function logout (state) {
  localStorage.removeItem('TAKEITS_SESSION_INFO')
  state.TAKEITS_SESSION_INFO = ''
}
