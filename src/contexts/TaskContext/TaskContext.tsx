import type { TaskStateModel } from "../../models/TaskStateModel"
import { initialTaskState } from "./initialTaskState"
import { createContext } from "react"


type TaskContextProps = {
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const InitialContextValue = {
    state: initialTaskState, // Valor padrão caso não use o Provider   
    setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(InitialContextValue);
