
export function getRole (state) {
  return state
}

export function can (state) {
  return permission => {
    const userInfo = JSON.parse(localStorage.getItem('TAKEITS_SESSION_INFO'))
    const per = (userInfo !== null) ? userInfo.permissions.filter(item => {
      return item === permission
    }).length : 0
    if (per > 0) {
      return true
    } else {
      return false
    }
  }
}
