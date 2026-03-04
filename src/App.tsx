import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';


import './styles/global.css'
import './styles/theme.css'
import { MyToastContainer } from './components/MyToastContainer';


export function App() {

    return (
        <TaskContextProvider >
            <MyToastContainer>
                <Home />
            </MyToastContainer>
        </TaskContextProvider>
    )

}
