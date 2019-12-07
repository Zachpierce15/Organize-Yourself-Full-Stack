export default (state = null, action) => {

  switch(action.type) {
    case 'USER_NAME':
      return action.payload.name;
    default: 
      return state
  }
}