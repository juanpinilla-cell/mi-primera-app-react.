import { useState } from 'react';
import TaskItem from './components/TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() === '') return; 

    const newTask = {
      id: Date.now(), 
      text: inputValue
    };

    setTasks([...tasks, newTask]);
    setInputValue(''); 
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Mi Lista de Tareas</h1>
        <p>Organiza tu día de forma sencilla</p>
      </header>

      <main>
        <form onSubmit={handleAddTask} className="task-form">
          <input 
            type="text" 
            placeholder="Escribe una nueva tarea..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="add-btn">Agregar</button>
        </form>

        <ul className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">No hay tareas pendientes. ¡Buen trabajo!</p>
          ) : (
            tasks.map(task => (
              <TaskItem key={task.id} task={task} onDelete={handleDeleteTask} />
            ))
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;