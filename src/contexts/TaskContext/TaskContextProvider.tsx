import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import { taskReducer } from "./TaskReducer";

type TaskContextProvider = {
    children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProvider) {
    const [state, dispatchTask] = useReducer(taskReducer, initialTaskState);


    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDownSeconds = e.data;


        console.log(e.data);

        if (countDownSeconds <= 0) {
            dispatchTask({
                type: TaskActionTypes.COMPLETE_TASK,
            })
            worker.terminate()
        } else {
            dispatchTask({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds },
            });
        }
    });


    useEffect(() => {
        if (!state.activeTask) {
            console.log('Worker mogado por falta de activeTask')
            worker.terminate();
        }

        worker.postMessage(state)
    }, [worker, state]);

    return (
        <TaskContext.Provider value={{ state, dispatchTask }}>
            {children}
        </TaskContext.Provider>
    )
}