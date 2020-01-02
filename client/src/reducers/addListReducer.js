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
      });
      
       return answer

      case 'MOVE_CARD':

        const { startId, finishId, source, destination} = action.payload

        if ( startId === finishId ) {
          const newOrderedList = state.map((list) => {
            if ( list.id.toString() === startId) {
              //Create copy of Items in list (Shallow Copy)
              let copyItems = [...list.items]
              // Copy Item being moved (Shallow copy)
              let itemMoved = {...copyItems[source.index]}
              //Remove item from original index in Items array
              copyItems.splice(source.index,1);
              // Add item to new index/ position in Items array
              copyItems.splice(destination.index, 0, itemMoved)

              return { ...list, items: copyItems }
            }
            return list
          });
          return newOrderedList
          // End of same column Drags
        }
        else {
          console.log('Did not make the cut')
          return state
        } 

      default: 
      return state
  }
}