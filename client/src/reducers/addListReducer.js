export default (state = [], action) => {

  switch(action.type) {

    case 'ADD_LIST':
      return [...state, action.payload]
    
    case 'ADD_CARD':
      const answer = state.map((list) => {

        if( list.id === action.payload.listId ) {

        return {...list, items: [...list.items, action.payload.card]}

        } else {

          return list

        }
      })
      console.log(answer,'This is ANSWER')
       return answer
      default: 
      return state
  }
}