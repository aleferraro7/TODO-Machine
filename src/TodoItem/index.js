import './TodoItem.css';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

function TodoItem (props) {
  return (
    <li className='TodoItem'>
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <AiOutlineCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span 
        className='Icon Icon-delete'
        onClick={props.onDelete}
      >
        <AiOutlineCloseCircle />
      </span>
    </li>
  );
}

export { TodoItem };