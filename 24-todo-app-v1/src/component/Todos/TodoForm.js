import { useState } from "react"


function TodoForm({ addTodo}) {   
    const [text, setText] = useState('')

    function onSubmitHandler(event) {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (    
        <form onSubmit={onSubmitHandler}>  
            <input
             placeholder="Введите новую заметку"
             value={text}
             onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Добавить</button>

        </form>
    )
}
export default TodoForm