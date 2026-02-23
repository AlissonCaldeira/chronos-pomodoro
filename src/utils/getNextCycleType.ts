import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle:number): TaskModel['type'] /*Tipo de valor retornado*/
{
    return currentCycle % 2 === 1 ? 'worktime' : currentCycle === 8 ? 'longBreakTime' : 'shortBreakTime';
    // Forma altenativa de fazer o código acima
    // if (currentCycle % 8 === 0) return 'longBreakTime';
    // if (currentCycle % 2 === 0) return 'shortBreakTime';
    // return 'worktime';
}