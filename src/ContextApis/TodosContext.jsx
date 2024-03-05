import { createContext, useEffect, useMemo, useState } from "react";
import axios from 'axios';

const TodosContext = createContext();

export const TodosContextProvider = (props) => {
    let { children } = props;

    let [ todos, setTodos ] = useState(null);
    
    let GetTodos = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response=>setTodos(response.data))
        .catch(error=>console.log(error))
    }
    useEffect(()=> {
        GetTodos()
    }, [])

    const contextValue = useMemo(()=>({todos}), [todos])

    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContext;