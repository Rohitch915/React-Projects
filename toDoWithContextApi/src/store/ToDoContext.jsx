import { createContext } from "react";

export const ToDoContext = createContext({
    taskCurValArr:[],
    onAdd:()=>{},
    deleteTask:()=>{}
})

