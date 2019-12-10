import React from 'react';
import { connect } from 'react-redux';
import { List, TitleOfList, ListContent } from './EachListCSS';


class EachList extends React.Component {
  constructor(props) {
    super(props);

    this.renderLists = this.renderLists.bind(this);
  }

  renderLists = () => {
    const everyList = this.props.lists;
    return everyList.map((list) => {
      return (
      <List key={list.id}>

        <ListContent>

          <TitleOfList>{list.title}</TitleOfList>
          
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