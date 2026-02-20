import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';


import './styles/global.css'
import './styles/theme.css'


export function App() {

    return (
        <TaskContextProvider >
            {/* Todos os componentes filhos irão receber o value */}
            <Home />
        </TaskContextProvider>
    )

}
