import React, {useState} from 'react';
import Task from './Task';
import Form from './Form';
import './TaskList.css'
import {v4 as uuid} from 'uuid';


const TaskList = () => {
    
    const [tasks, setTask] = useState([
        {
            id: uuid(),
            name: 'Sleeping',
            isCompleted: false
        },
        {
            id: uuid(),
            name: 'Eating',
            isCompleted: true
        },
        {
            id: uuid(),
            name: 'Coding',
            isCompleted: false
        },
        {
            id: uuid(),
            name: 'Binge Watch',
            isCompleted: true
        },
        
    ])
    const addTask = (name)=> {
        setTask((prevState) => {
            return [...prevState,{name: name,id:uuid(), isCompleted: false}];
        })
    }

    const deleteTask = (key) => {
        // setTask((prevState) => {
        //     return prevState.splice(index,index);
        // })
        console.log(key) 
        setTask((prevState) => {
            return [...prevState].filter((value) => value.id !== key)
        })
    }
    
    const upTask = (todoid) => {

        if(todoid === 0) {
            alert('Task Already at top!')
        }else{
            setTask((prevState) => {
                const data = [...prevState];
                const temp = data[todoid - 1]
                data[todoid - 1] = data[todoid]
                data[todoid] = temp;
                return data;    
            });
        }
    }
    

    const downTask = (todoid) => {
        if(todoid === 0) {
            alert('Task Already at bottom!')
        }else{
            setTask((prevState) => {
                const data = [...prevState];
                const temp = data[todoid]
                data[todoid] = data[todoid + 1]
                data[todoid + 1] = temp;
                return data;    
            });
        }
    }

    const toggleCheckbox = (todoid) => {
       // console.log(todoid);
        setTask((prevState) => {
            return prevState.map((task) => {       
                return task.id === todoid ? {...task , isCompleted: !task.isCompleted} : task;
            });
        });
    }

    const taskList = tasks.map((task, idx) => {
        return  <Task
        id={task.id}
        idx= {idx}
        key={task.id}
        name= {task.name}
        isCompleted = {task.isCompleted}
        delTask = {deleteTask}
        upTask = {upTask}
        downTask = {downTask}
        toggleCheckbox = {toggleCheckbox}
        />
    });

    
    return(
        <div className="body">
            <div className="wrapper">
                <header>
                    ToDo List
                </header>
                <Form add={ addTask }/>
                <ul className="todoList">
                    {taskList}
                </ul>
            </div>
        </div>
    )

};

export default TaskList;