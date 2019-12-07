import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../../actions';
import { Board, EachList } from './ListCSS';

// Generates a random id for each list
const generateId = (min, max) => {
    return Math.random() * (max - min) + min;
}

const Lists = () => {

  // Using hooks to keep track of input, and the new list being created
  const [input, setInput] = React.useState('');
  const [newList, setNewList] = React.useState({});

  const createList = () => {
    setNewList({ title: input, id: generateId(0,100000)})
    console.log(newList)
    addList(newList)
  }

  return (
    <Board>

      <EachList>This is one div</EachList>

      <div>

        <form>

          <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Enter list title...'
          value={input}
          /> 

          <div>
            <input onClick={createList} type='submit' value='Create list'/> 
          </div>

        </form>

      </div>
    </Board>
  )
}

export default connect(null, { addList })(Lists)