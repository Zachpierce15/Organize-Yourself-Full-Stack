import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd'
import { List, TitleOfList, ListContent, AddCardDiv } from './EachListCSS';
import AddCard from './AddCard';
import Card from './Card/Card';
import ItemList from './ItemList/ItemList';


class EachList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered : false,
    }
  }

  checkForCards = (list, provided) => {

    return list.items.length > 0 ? <div> {list.items.map( ( item, index ) => {

      return (
            <Card
              key={item.id}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              item={item}
              index={index}
            >
              {provided.placeholder}
            </Card>
      )}
  ) }</div>:
    null
  }

  render() {
    const { lists } = this.props;

    return lists.map((list) => {

      return (
      <List key={list.id}>

        <ListContent>

          <TitleOfList>{list.title}</TitleOfList>

          <ItemList list={list}/>


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