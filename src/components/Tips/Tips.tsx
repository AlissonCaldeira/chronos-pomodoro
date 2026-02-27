import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {

    const { state } = useTaskContext();


    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por <b>{state.config.workTime}min</b></span>,
        shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime}min</b></span>,
        longBreakTime: <span>Descanse longo de <b>{state.config.longBreakTime}min</b></span>,
    }
    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de foco por <b>{state.config.workTime}min</b></span>,
        shortBreakTime: <span>Próximo descanso será curto de <b>{state.config.shortBreakTime}min</b></span>,
        longBreakTime: <span>Próximo descanso será longo de <b>{state.config.longBreakTime}min</b></span>,
    }

    return (
        <p>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </p>
    )
}