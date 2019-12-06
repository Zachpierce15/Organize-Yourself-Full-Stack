export default (state = null, action) => {
  if(action.type==='USER_NAME') {
    return action.payload.name
  }
  return state
}