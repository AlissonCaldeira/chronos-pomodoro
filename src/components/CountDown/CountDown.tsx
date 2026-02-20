import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './CountDown.module.css'

/* Pode ser qualquer nome no lugar do styles*/


export function CountDown() {

    const { state } = useTaskContext();
    return (
        <div className={styles.container}>
            {state.formattedSecondsRemainig}
        </div>
    )
}