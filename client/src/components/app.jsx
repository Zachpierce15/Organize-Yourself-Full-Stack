import React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn/SignIn';
import MainPage from './MainPage/MainPage';
import { DragDropContext } from 'react-beautiful-dnd';
import { MoveCard } from '../actions/index';


class App extends React.Component {
  renderSelector = () => {
    return this.props.user === null ? <SignIn /> : <MainPage />
  }
  onDragEnd = result => {

    const { destination, source, draggableId } = result;
  
    if(!destination) {
      return;
    }
  
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
   this.props.MoveCard(source, destination, draggableId)
  }

  render() {
    return (
      <DragDropContext
    onDragEnd={this.onDragEnd}
  >

    <div>
      {this.renderSelector()}
    </div>

  </DragDropContext>

    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    list: state.lists
   }
}
export default connect(mapStateToProps, { MoveCard })(App)