import './styles/global.css'


import './styles/theme.css'

// PascalCase
export function App() { // Exportar o Funcion é mais fácil

    // O que aparecerá na página
    // Quando se há mais de uma linha no retorno coloque entre parênteses os elementos
    return (
        // Só é possível retornar UM elemento pai no jsx/tsx
        <> {/*Isso é um React Fragment, basicamente uma tag vazia que é pais de todos os itens
        desse componente. OBS: ela não aparece como elemento no inspencionar do navegador */}
            <div className="container">
                <div className="content">
                    <section>LOGO</section>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <section>MENU</section>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <section>FORM</section>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <section>FOOTER</section>
                </div>
            </div>
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
