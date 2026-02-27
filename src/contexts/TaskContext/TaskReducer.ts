import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TascActionTypes, type TaskActionModel } from "./TaskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel){

    switch(action.type){
        case TascActionTypes.START_TASK:{ 
            const newTask = action.payload
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60;

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                task: [...state.task, newTask],
            }; 
        }
        case TascActionTypes.INTERRUPT_TASK:{
           // setState(prevstate => {
                   //     return {
                   //         ...prevstate,
                   //         activeTask: null,
                   //         secondsRemainig: 0,
                   //         formattedSecondsRemainig: '00:00',
                   //         
                   //            
                   //                 
                   //             }
                   //             return task
                   //         })
                   //     }
                   // }) 
        
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                task: state.task.map(task => {
                     if (state.activeTask && state.activeTask.id === task.id){
                        return{...task, interruptDate: Date.now()}
                        }
                        return task
                    })
            }
}
        case TascActionTypes.RESET_TASK:
            return state;
    }

    // Sempre deve retornar o estado
    return state
}