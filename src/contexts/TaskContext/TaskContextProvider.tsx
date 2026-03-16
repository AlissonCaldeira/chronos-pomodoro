import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import { taskReducer } from "./TaskReducer";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProvider = {
    children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProvider) {
    const [state, dispatchTask] = useReducer(taskReducer, initialTaskState, () => {
        const storageState = localStorage.getItem('state')

        if (storageState === null) return initialTaskState;

        const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

        return {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00'
        };
    });
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

        localStorage.setItem('state', JSON.stringify(state));

        if (!workerRef.current) return;

        if (!state.activeTask) {
            workerRef.current.terminate();
            return;
        }

        document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`

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