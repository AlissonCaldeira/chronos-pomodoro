import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './Cycles.module.css'


export function Cycles() {
    const { state } = useTaskContext();

    const cycleSteps = Array(state.currentCycle).fill(null); // Gera um array com 8 posições e  as preenche com null
    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descanso longo'
    }

    return (
        <div className={styles.cycles}>
            <span>Ciclos</span>
            <div className={styles.cycleDots}>
                {cycleSteps.map((_, index) => { // O map faz uma interação
                    const nextCycle = getNextCycle(index);
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                        <span
                            key={nextCycle + '_' + nextCycle}
                            // key necessário quando é criado um componente desta forma.
                            className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                            title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                        ></span>
                    )
                })}


                {/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}


            </div>
        </div>
    )
}