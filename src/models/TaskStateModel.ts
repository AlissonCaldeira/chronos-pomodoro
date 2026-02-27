import type { TaskModel } from "./TaskModel"

export type TaskStateModel = {
    task: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number; // 1 a 8
    config:{
        workTime: 25;
        shortBreakTime: 5;
        longBreakTime: 15;
    };

}