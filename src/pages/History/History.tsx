import { TrashIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { useEffect, useState } from "react";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";
import { toastifyAdapter } from "../../adapters/toastifyAdapter";


import styles from './styles.module.css'
import type { TaskStateModel } from "../../models/TaskStateModel";

export function History() {

    const { state, dispatchTask, setState } = useTaskContext();
    const hasTasks = state.task.length > 0
    const [confirmClearHistory, setConfirmClearHistory] = useState(false)

    const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
        return {
            task: sortTasks({ task: state.task }),
            field: 'startDate',
            direction: 'desc',
        }
    })

    useEffect(() => {



        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSortTaskOptions(prevState => ({
            ...prevState,
            task: sortTasks({
                task: state.task,
                direction: prevState.direction,
                field: prevState.field,
            })
        }))
    }, [state.task])

    useEffect(() => {


        if (!confirmClearHistory) return;


        // eslint-disable-next-line react-hooks/set-state-in-effect
        setConfirmClearHistory(false)
        dispatchTask({ type: TaskActionTypes.RESET_TASK })


    }, [confirmClearHistory, dispatchTask])

    useEffect(() => {
        return () => {
            toastifyAdapter.dismiss();
        }
    }, [])

    useEffect(() => {
        document.title = 'Histórico - Chronos Pomodoro'
    }, [])

    function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
        const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc'

        setSortTaskOptions({
            task: sortTasks({
                direction: newDirection,
                task: sortTaskOptions.task,
                field,
            }),
            direction: newDirection,
            field,
        })
    }


    function handleDeleteHistory() {
        toastifyAdapter.dismiss();
        toastifyAdapter.confirm('Tem certeza?', confirmation => {
            setConfirmClearHistory(confirmation);
        })
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    {hasTasks && (
                        <span className={styles.buttonContainer}>
                            <Button icon={<TrashIcon />}
                                color='red'
                                aria-label='Apagar todo o histórico'
                                title='Apagar histórico'
                                onClick={() => handleDeleteHistory()} />
                        </span>
                    )}
                </Heading>
            </Container>

            <Container>
                {hasTasks && (
                    <div className={styles.resposiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'name' })}>Tarefa ↕</th>
                                    <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'duration' })}>Duração ↕</th>
                                    <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'startDate' })}>Data ↕</th>
                                    <th >Status</th>
                                    <th >Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortTaskOptions.task.map((task) => {
                                    const taskTypeDictionary = {
                                        workTime: 'Foco',
                                        shortBreakTime: 'Descanso curto',
                                        longBreakTime: 'Descanso Longo',
                                    }

                                    return (
                                        <tr key={task.id}>
                                            <td>{task.name}</td>
                                            <td>{task.duration}min</td>
                                            <td>{formatDate(task.startDate)}</td>
                                            <td>{getTaskStatus(task, state.activeTask)}</td>
                                            <td>{taskTypeDictionary[task.type]}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>)}
                {!hasTasks && (
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Ainda não existem tarefas criadas</p>
                )}

            </Container>
        </MainTemplate>
    )
}