import { Home } from './pages/Home';

import { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

import './styles/global.css'
import './styles/theme.css'

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


    return <Home state={state} setState={setState} />


}
