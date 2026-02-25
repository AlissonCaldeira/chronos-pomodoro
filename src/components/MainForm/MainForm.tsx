import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {

    const { state, setState } = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);

    // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current == null) return;

        const newTaskName = taskNameInput.current.value.trim();

        if (!newTaskName) {
            alert('Digite o nome da tarefa');
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

        const secondsRemaining = newTask.duration * 60;

        setState(prevstate => {
            return {
                ...prevstate,
                config: { ...prevstate.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining, // Conferir
                // Quando tem uma variavél com o mesmo nome da chave não é necessário atribuir o valor aqui a ela
                formattedSecondsRemainig: formatSecondsToMinutes(secondsRemaining), // Conferir
                task: [...prevstate.task, newTask],
                // Os arrays você mexe igual com os states, pega o valor anterior e cria um novo
                // Nunca altere diretamente valores mutáveis 
            }
        })
    }

    function handleInterruptTask(){
        setState(prevstate => {
            return {
                ...prevstate,
                activeTask: null,
                secondsRemainig: 0,
                formattedSecondsRemainig: '00:00',
                task: prevstate.task.map(task => {
                    if (prevstate.activeTask && prevstate.activeTask.id === task.id){
                        return{...task, interruptDate: Date.now()}
                    }
                    return task
                })
            }
        })   
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
                    disabled = {!!state.activeTask}    
                    />
            </div>
            <div className="formRow">
                <span>Lorem ipsum dolor sit amet.</span>
            </div>

            {state.currentCycle > 0 && ( // Só exibe se a condição for verdadeira
                <div className="formRow">
                    <Cycles />
                </div>)}

            <div className="formRow">
                {!state.activeTask ? (
                    <Button 
                    type ='submit'
                    icon={<PlayCircleIcon />} 
                    aria-label= 'Iniciar nova tarefa'
                    title = 'Iniciar nova tarefa'
                    key='Botão de submit' // Preveni que o React confunda os botões, pode acontecer no React
                    />
                    ): (
                        <Button 
                    type ='button'
                    icon={<StopCircleIcon />} 
                    color = 'red'
                    aria-label= 'Parar tarefa atual'
                    title = 'Parar tarefa atual'
                    onClick = {handleInterruptTask}
                    key = 'botão de interrupt' // Preveni que o React confunda os botões, pode acontecer no React
                    />
                    )} 
                
                    
            </div>
        </form>

    )
}