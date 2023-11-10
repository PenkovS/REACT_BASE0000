import { useState } from 'react';
import TodoForm from './component/Todos/TodoForm';
import TodoList from './component/Todos/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    setTodos([...todos,text])
  }
  return (  
    <div className="App"> 
      <h1>Мои Заметки</h1>
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList todos={todos}/>
    </div>
  )
}

export default App;
