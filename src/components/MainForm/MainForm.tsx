import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";
import { Tips } from "../Tips";
import { toastifyAdapter } from "../../adapters/toastifyAdapter";
import { useRef } from "react";

export function MainForm() {

    const { state, dispatchTask } = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);
    const lastTaskName = state.task[state.task.length - 1]?.name || '';


    // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    //tips

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        toastifyAdapter.dismiss();

        if (taskNameInput.current == null) return;

        const maxHistoryElements = 100;
        if (state.task.length > maxHistoryElements - 1) {

            toastifyAdapter.error(`Número limite de ${maxHistoryElements} atingido por favor apague o histórico para continuar`)
            return;
        }
        const newTaskName = taskNameInput.current.value.trim();

        if (!newTaskName) {
            toastifyAdapter.warning('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: newTaskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };


        dispatchTask({ type: TaskActionTypes.START_TASK, payload: newTask })

        toastifyAdapter.success('Tarefa Iniciada com sucesso')
    }

    function handleInterruptTask() {
        toastifyAdapter.dismiss();
        toastifyAdapter.error('Tarefa Interrompida')
        dispatchTask({ type: TaskActionTypes.INTERRUPT_TASK })
    }


    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className="formRow">
                <DefaultInput
                    id='meuInput'
                    labelText='Task'
                    type='text'
                    placeholder='Digite Algo'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                    defaultValue={lastTaskName}
                />
            </div>
            <div className="formRow">
                <Tips />
            </div>

            {state.currentCycle > 0 && ( // Só exibe se a condição for verdadeira
                <div className="formRow">
                    <Cycles />
                </div>)}

            <div className="formRow">
                {!state.activeTask ? (
                    <Button
                        type='submit'
                        icon={<PlayCircleIcon />}
                        aria-label='Iniciar nova tarefa'
                        title='Iniciar nova tarefa'
                        key='Botão de submit' // Preveni que o React confunda os botões, pode acontecer no React
                    />
                ) : (
                    <Button
                        type='button'
                        icon={<StopCircleIcon />}
                        color='red'
                        aria-label='Parar tarefa atual'
                        title='Parar tarefa atual'
                        onClick={handleInterruptTask}
                        key='botão de interrupt' // Preveni que o React confunda os botões, pode acontecer no React
                    />
                )}


            </div>
        </form>

    )
}