import type { TaskStateModel } from "../../models/TaskStateModel";
import { TascActionTypes, type TaskActionModel } from "./TaskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel){

    switch(action.type){
        case TascActionTypes.START_TASK:
            
            return state;

        case TascActionTypes.INTERRUPT_TASK:
            return state;

        case TascActionTypes.RESET_TASK:
            return state;
    }

    // Sempre deve retornar o estado
    return state
}