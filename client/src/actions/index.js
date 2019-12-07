//Get the name of the user and save it to Redux Store 
const nameOfUser = ( name ) => {
  return {
    type: 'USER_NAME',
    payload: name
  }
}
// Add a new list to the Redux Store
const addList = (list) => {
  return {
    type: 'ADD_LIST',
    payload: list
  }
}
export{
  nameOfUser,
  addList 
}