import React,{useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const [buttonName] = useState('Add todo');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    


    const handleChange = e => {
        setInput(e.target.value);
    };

    


    // handle submit
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput('');
    };

    

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={input}
                placeholder="Add a todo"
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button">{buttonName}</button>
        </form>
    )
}

export default TodoForm
