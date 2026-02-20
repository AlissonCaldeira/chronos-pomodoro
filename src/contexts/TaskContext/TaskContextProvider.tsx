import { useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProvider = {
    children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProvider) {
    const [state, setState] = useState<TaskStateModel>(initialTaskState);


    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    )
}