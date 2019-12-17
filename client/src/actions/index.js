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
// Add a new card to an existing list
const AddCardToList = (listId, card) => {
  return {
    type: 'ADD_CARD',
    payload: {
      listId: listId,
      card: card
    }
  }
}
export{
  nameOfUser,
  addList,
  AddCardToList 
}