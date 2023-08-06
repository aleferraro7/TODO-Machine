import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  const [newTodoValue, setTodoNewValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = (event) => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setTodoNewValue(event.target.value)
  };

  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Escribe"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button" 
          className="TodoForm-button
          TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button 
          type="submit"
          className="TodoForm-button
          TodoForm-button--add"
        >Añadir</button>
      </div>

    </form>
  )
}

export { TodoForm }