import type { TaskStateModel } from "../../models/TaskStateModel"
import { initialTaskState } from "./initialTaskState"
import { createContext } from "react"
import type { TaskActionModel } from "./TaskActions"


type TaskContextProps = {
    state: TaskStateModel
    dispatchTask: React.Dispatch<TaskActionModel>
}

const InitialContextValue = {
    state: initialTaskState, // Valor padrão caso não use o Provider   
    dispatchTask: () => { },
}

export const TaskContext = createContext<TaskContextProps>(InitialContextValue);
