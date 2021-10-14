import React, { useState } from "react";
const Form = (props) => {
    const [name, setName] = useState('');
    
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
      
        props.add(name);
        setName('');
    }

    return <form onSubmit={formSubmitHandler}>
        <div className="inputField">
            <input 
            type="text"
            id="inputform"
            placeholder="Add your new Todo"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
             />
            <button type="submit" className="fas fa-plus"></button>
        </div>
    </form>

}

export default Form;