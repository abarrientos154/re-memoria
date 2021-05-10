export function fetchAccessToken ({ commit }) {
  commit('updateAccessToken', JSON.parse(localStorage.getItem('TAKEITS_SESSION_INFO')))
}
export function logout ({ commit }) {
  localStorage.removeItem('TAKEITS_SESSION_INFO')
  commit('logout')
}
