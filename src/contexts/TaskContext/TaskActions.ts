import type { TaskModel } from "../../models/TaskModel";

export enum TascActionTypes  {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_TASK = 'RESET_TASK',
}

export type TaskActionModel = {
    type: TascActionTypes.START_TASK;
    payload: TaskModel;
} | {
    type: TascActionTypes.INTERRUPT_TASK;
    payload: TaskModel;
} | {
    type: TascActionTypes.RESET_TASK;
}