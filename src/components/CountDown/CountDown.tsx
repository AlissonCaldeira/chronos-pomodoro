import styles from './CountDown.module.css'
import { TaskContext } from '../../contexts/TaskContext'
import { useTaskContext } from '../../App'
/* Pode ser qualquer nome no lugar do styles*/


export function CountDown() {

    const taskContext = useTaskContext;
    return (

        <div className={styles.container}>
            00:00<br />
            {taskContext.chave}
        </div>
    )
}