import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    task: [],
    secondsRemainig: 0,
    formattedSecondsRemainig: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        worktime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    }
}

type TaskContextProps = {
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const InitialContextValue = {
    state: initialState, // Valor padrão caso não use o Provider   
    setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(InitialContextValue)

type TaskContextProvider = {
    children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProvider) {
    return (
        <TaskContext.Provider value={{ ...InitialContextValue }}>
            {children}
        </TaskContext.Provider>
    )
}