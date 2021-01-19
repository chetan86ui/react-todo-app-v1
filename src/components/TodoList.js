import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    //set state
    const [todos, setTodos] = useState([]);

    // main logic for todo
    const addTodo = todo => {
        //handle blank charecters
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        } 

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
       //handle blank charecters
       if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
       }  

       setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removeArr = [...todos.filter(todo => todo.id !== id)];

        setTodos(removeArr);
    };

    

    const completeTodo = id => {
        console.log("here");
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

    return (
        <div>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
             />
        </div>
    )
}

export default TodoList
