import React from 'react';
import { connect } from 'react-redux';
import { List, TitleOfList, ListContent, AddCardDiv } from './EachListCSS';
import AddCard from './AddCard'


class EachList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered : false,
    }

    this.renderLists = this.renderLists.bind(this);
  }

  checkForCards = (list) => {

  }

  renderLists = () => {
    const everyList = this.props.lists;
    console.log(everyList, 'THIS IS ALL LISTS')
    return everyList.map((list) => {

      return (
      <List key={list.id}>

        <ListContent>

          <TitleOfList>{list.title}</TitleOfList>

          <AddCardDiv>

            <AddCard listId={list.id}/>
            
          </AddCardDiv>
          
        </ListContent>

      </List>
      )
    })
  }

  render() {
    return this.renderLists()
  }
}

// Mapping Lists to props of this component
const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(EachList)