import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { EachCard } from './CardCSS';

const Card = props => {
  const { name } = props.item
  // const { index } = props
  return (
    // <Draggable draggableId={id} index={index}>
      // {(provided) => (
        <EachCard
          // {...provided.draggableProps}
          // {...provided.dragHandleProps}
          // innerRef={provided.innerRef}
        >
          {name}
      </EachCard>
      )}
    // </Draggable>
  // )

export default Card