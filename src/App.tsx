import { Home } from './pages/Home';

import type { TaskStateModel } from './models/TaskStateModel';
import { useContext, useState } from 'react';

import './styles/global.css'
import './styles/theme.css'
import { TaskContext, TaskContextProvider } from './contexts/TaskContext';

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
        <TaskContextProvider value={{ chave: "" }}>
            {/* Todos os componentes filhos irão receber o value */}
            <Home />
        </TaskContextProvider>
    )

}
export function useTaskContext() {
    return useContext(TaskContext);
}