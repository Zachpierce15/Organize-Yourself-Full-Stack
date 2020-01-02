import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import { List, TitleOfList, ListContent, AddCardDiv } from './EachListCSS';
import AddCard from './AddCard';
import ItemList from './ItemList/ItemList';


class EachList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered : false,
    }
  }



  render() {
    const { lists } = this.props;

    return lists.map((list) => {

      return (
      <List key={list.id}>

        <ListContent>

          <TitleOfList>{list.title}</TitleOfList>

          <Droppable droppableId={list.id.toString()}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
              <ItemList
                list={list}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* <Droppable droppableId={"23"}>
            {(provided, snapshot) => {
              console.log('snapshot: ', snapshot);
              return (
                <div ref={provided.innerRef} {...provided.droppableProps} style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}>
                  <p>This is the column</p>
                  {provided.placeholder}
                  <Draggable draggableId={"47"} index={0} isDragDisabled={false}>
       {(innerProvided) => {
         return (
          <div {...innerProvided.draggabldeProps}
              {...innerProvided.dragHandleProps}
              ref={innerProvided.innerRef}>
              <p>Something</p>
        </div>
         )
       }
      }
    </Draggable>
    <Draggable draggableId={"48"} index={1} isDragDisabled={false}>
       {(innerProvided) => (
         <div {...innerProvided.draggableProps}
              {...innerProvided.dragHandleProps}
              ref={innerProvided.innerRef}>
              <p>Something</p>
        </div>
      )}
    </Draggable>
                </div>
              )
            }}
          </Droppable> */}

          <AddCardDiv>

            <AddCard listId={list.id}/>
            
          </AddCardDiv>

          
        </ListContent>

      </List>
      )
    });
  }
};

// Mapping Lists to props of this component
const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
};

export default connect(mapStateToProps)(EachList);