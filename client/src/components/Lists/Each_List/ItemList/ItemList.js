import React from 'react';
import Card from '../Card/Card'

const ItemList = (props) => {
  const { items } = props.list
  console.log(props, 'Made it here')
  return items.length > 0 ? <div> {items.map( ( item ) => {

    return (
          <Card
            key={item.id}
            item={item}
          >
          </Card>
    )}
) }</div>:
  null
}

export default ItemList