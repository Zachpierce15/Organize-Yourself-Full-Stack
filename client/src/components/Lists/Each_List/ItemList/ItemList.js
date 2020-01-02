import React from 'react';
import Card from '../Card/Card'

const ItemList = (props) => {
  const { items } = props.list
  return items.length > 0 ? items.map( ( item, index ) => {

    return (
          <Card
            key={item.id}
            item={item}
            index={index.toString()}
           />

    )}
) :
  null
}

export default ItemList