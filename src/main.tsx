import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importando o Elemento no React
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>  {/*Apenas para uso de Desenvolvimento*/}

    <App />

  </StrictMode>,
);
