export default (state = null, action) => {
  console.log(state, 'This IS STATE')
  if(action.type==='USER_NAME') {
    return action.payload.name
  }
  return state
}