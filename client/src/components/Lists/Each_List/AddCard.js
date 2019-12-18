import React from 'react';
import { AddCardText } from './EachListCSS';
import CardForm from './CardForm/AddCardForm';


class AddCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      clicked: false,
      cardAdded: false
    }
    this.hasAddedCard = this.hasAddedCard.bind(this);
  }

  onClickHandler = () => {
    this.setState({ clicked: true })
  }

  hasAddedCard() {
    this.setState({ cardAdded: true, clicked: false })
  }

  render() {
    const { clicked, cardAdded } = this.state

    if (clicked) {
      return (
          <CardForm listId={this.props.listId} hasAddedCard={this.hasAddedCard}/>
      )
    }
    if (cardAdded) {
      return (
        <AddCardText
        onClick={this.onClickHandler}
        onMouseEnter={() => this.setState({ hovered: true }) }
        onMouseLeave={() => this.setState({ hovered: false })}
        style={this.state.hovered ? { backgroundColor: 'ivory' } : null}
        >
         <span><i className="plus icon"></i></span>
         <span>Add Another Card</span>
       </AddCardText>
      )
    }
    return (
      <AddCardText
      onClick={this.onClickHandler}
      onMouseEnter={() => this.setState({ hovered: true }) }
      onMouseLeave={() => this.setState({ hovered: false })}
      style={this.state.hovered ? { backgroundColor: 'ivory' } : null}
      >
       <span><i className="plus icon"></i></span>
       <span>Add Card</span>
     </AddCardText>
    )
  }
}

export default AddCard