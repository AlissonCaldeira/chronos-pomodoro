import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import { taskReducer } from "./TaskReducer";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProvider = {
    children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProvider) {
    const [state, dispatchTask] = useReducer(taskReducer, initialTaskState);
    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    const workerRef = useRef<TimerWorkerManager | null>(null);

    useEffect(() => {
        const worker = TimerWorkerManager.getInstance();
        workerRef.current = worker;

        worker.onmessage(e => {
            const countDownSeconds = e.data;

            if (countDownSeconds <= 0) {
                if (playBeepRef.current) {
                    playBeepRef.current();
                    playBeepRef.current = null;
                }
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
    })



    useEffect(() => {
        if (!workerRef.current) return;

        if (!state.activeTask) {
            workerRef.current.terminate();
            return;
        }

        workerRef.current.postMessage(state);
    }, [state]);


    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{ state, dispatchTask }}>
            {children}
        </TaskContext.Provider>
    )
}