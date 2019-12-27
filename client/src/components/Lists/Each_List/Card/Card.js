import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { EachCard } from './CardCSS';

const Card = props => {
  
  const { name, id } = props.item
  const { index } = props

  return (
    <Draggable draggableId={id.toString()} index={index} key={id}>
       {(provided) => (
          <EachCard
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              >
                {name}
            </EachCard>
      )}
    </Draggable>
  )
}

export default Card