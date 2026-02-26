import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";

type TaskContextProvider = {
    children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProvider) {
    const [state, dispatchTask] = useReducer(taskReducer, initialTaskState);



    useEffect(() => {
        console.log(state)
    }, [state]);

    return (
        <TaskContext.Provider value={{ state, dispatchTask }}>
            {children}
        </TaskContext.Provider>
    )
}