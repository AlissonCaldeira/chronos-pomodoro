import { Home } from './pages/Home';

import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

import './styles/global.css'
import './styles/theme.css'
import { TaskContext } from './contexts/TaskContext';

const initialState: TaskStateModel = {
    task: [],
    secondsRemainig: 0,
    formattedSecondsRemainig: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        worktime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    }
}

export function App() {
    const [state, setState] = useState<TaskStateModel>(initialState);

    return (
        <TaskContext.Provider value={{ chave: "" }}>
            {/* Todos os componentes filhos irão receber o value */}
            <Home />
        </TaskContext.Provider>
    )

}
