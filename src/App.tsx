import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MyToastContainer } from './components/MyToastContainer';
import { MainRouter } from './routers/MainRouter';


import './styles/global.css'
import './styles/theme.css'


export function App() {

    return (
        <TaskContextProvider >
            <MyToastContainer>
                <MainRouter />
            </MyToastContainer>
        </TaskContextProvider>
    )

}
