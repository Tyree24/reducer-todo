import React, { useState }  from 'react';

export default function TodoForm({dispatch}) {

    const [ newTodoText, setNewTodoText ] = useState('');

    const handleChanges = (e) => {
      setNewTodoText(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setNewTodoText('');
      dispatch(
        { type: "ADD_TODO",
          payload: newTodoText
        }
      );
      setNewTodoText('');
    };

  return (
    <>
      <form>
      <input 
          type="text" 
          placeholder="New Todo" 
          name="newTodoText"
          value={newTodoText}
          onChange={handleChanges}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </>
  )
}