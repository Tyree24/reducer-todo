import React, { useReducer } from 'react';
import Todo from './Todo';

import { todoReducer, initialTodosState } from '../reducers/todoReducer';

export default function TodoList() {
    const [ state, dispatch ] = useReducer(todoReducer, initialTodosState);


  return (
    <div>
             {
        state.map( (todo) => {
          return <Todo todo={todo} key={todo.id} />
        })
      }
    </div>
  );
}