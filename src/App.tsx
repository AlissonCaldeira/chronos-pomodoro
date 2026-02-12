
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css'
import './styles/theme.css'

// PascalCase
export function App() { // Exportar o Funcion é mais fácil

    // O que aparecerá na página
    // Quando se há mais de uma linha no retorno coloque entre parênteses os elementos
    return (
        // Só é possível retornar UM elemento pai no jsx/tsx
        <> {/*Isso é um React Fragment, basicamente uma tag vazia que é pais de todos os itens
        dess
            <div className="container">
                <div className="content">
                    <section>MENU</section>
                </div>e componente. OBS: ela não aparece como elemento no inspencionar do navegador */}
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <label htmlFor="input">task</label>
                        <input id='input' type="text" />
                    </div>
                    <div className="formRow">
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="formRow">
                        <p>ciclos</p>
                        <p>0 0 0 0 0 0</p>
                    </div>
                    <div className="formRow">
                        <button>enviar</button>
                    </div>
                </form>
            </Container>


            { /* Fins didáticos
            <div className="container-fluid">
                <div className="container">
                    <div className="content">
                        <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum maxime hic sed quisquam, fugiat doloribus iure. Blanditiis alias, nesciunt asperiores earum corrupti ipsum placeat, nemo sed magnam corporis suscipit.</section>
                    </div>
                </div>
            </div>*/}
        </>
    );
}
// Exportar o componente do React
// export default App - pode-se colocar qualquer nome para o componente na hora de importar
//export { App }; // O componente irá se chamar App obrigatoriamete
