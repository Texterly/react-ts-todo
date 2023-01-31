import React from 'react';
import TodoItem from './TodoItem';
import {ITodo} from '../types/data';

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const {items, removeTodo, toggleTodo} = props;
  return (
    <div>
        {
            items.map(todo => (
              <TodoItem
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                {...todo} 
              />
            ))
        }
    </div>
  )
}

export default TodoList