import React from "react";
import './Task.css'

const Task = (props) => {
    //const [taskName, setName] = useState(props.name);
    
    // const taskNameChangeHandler = (event) => {
    //     setName('');
        
    // }
    const deleteTask = () => {
        props.delTask(props.id);
    }
    const upTask = () => {
        props.upTask(props.idx);
    }
    const downTask = () => {
        props.downTask(props.idx);
    }
    const toggleCheckbox = () => {
        props.toggleCheckbox(props.id)
    }

    return (
            <div> 
            <li style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}} key={props.id}>{props.idx+1}. { props.name }
            <span  className="checkbox">
                <input className="inside-checkbox" defaultChecked={props.isCompleted} onClick={toggleCheckbox} type="checkbox"/>
            </span>
            <span className="up" onClick={upTask}><i className="fas fa-arrow-up"></i></span>
            <span className="down" onClick={downTask}><i className="fas fa-arrow-down"></i></span>
            <span className="delete" onClick={deleteTask}><i className="fas fa-trash"></i></span></li>
            </div>
    )
}

export default Task;