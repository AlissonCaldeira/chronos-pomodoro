import './styles/global.css'
import './styles/theme.css'

// PascalCase
export function App() { // Exportar o Funcion é mais fácil
    console.log("Hello");
    // O que aparecerá na página
    // Quando se há mais de uma linha no retorno coloque entre parênteses os elementos
    return (
        // Só é possível retornar UM elemento pai no jsx/tsx
        <> {/*Isso é um React Fragment, basicamente uma tag vazia que é pais de todos os itens
        desse componente. OBS: ela não aparece como elemento no inspencionar do navegador */}
            <h1>Hello World (from App)</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Laborum aspernatur iure deserunt beatae doloru
                m! Aliquam dolore doloribus voluptates quibusdam libero, sapiente,
                tenetur sint similique placeat eveniet optio quaerat iusto tempore.
            </p>
        </>
    );
}
// Exportar o componente do React
// export default App - pode-se colocar qualquer nome para o componente na hora de importar
//export { App }; // O componente irá se chamar App obrigatoriamete
