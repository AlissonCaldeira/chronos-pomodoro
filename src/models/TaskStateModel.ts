import type { TaskModel } from "./TaskModel"

export type TaskStateModel = {
    task: TaskModel[];
    secondsRemainig: number;
    formattedSecondsRemainig: string;
    activeTask: TaskModel | null;
    currentCycle: number; // 1 a 8
    config:{
        worktime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };

}