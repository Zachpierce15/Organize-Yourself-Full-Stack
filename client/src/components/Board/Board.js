import React from 'react';
import { connect } from 'react-redux';
import EachList from '../Lists/Each_List/EachList';
import { addList } from '../../actions';
import { Board, AddListForm } from './BoardCSS';

// Generates a random id for each list
const generateId = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.createList = this.createList.bind(this);
  }


  createList(e) {
    const { input } = this.state
    e.preventDefault()
    // Create the list 
    const newList = {
      id: generateId(0,100000),
      title: input,
      items: []
    }
    this.props.addList(newList)
    this.setState({ input: '' })
  }

  render() {
    return (
      <Board>
  
        {this.props.lists.length === 0 ? null : <EachList />}
  
        <div>
  
          <AddListForm>
            <div className='ui input'>
              <input
              onChange={(e) => this.setState({ input: e.target.value })}
              type='text'
              placeholder='Enter list title...'
              value={this.state.input}
              /> 
            </div>
  
            <div>
              <input className="ui primary button" onClick={(e) => this.createList(e)} style={{marginTop: '3px'}} type='submit' value='Create list'/> 
            </div>
  
          </AddListForm>
  
        </div>
      </Board>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps, { addList })(Lists)