import { createContext } from "react";

export const TaskContext = createContext({
    chave: 'valor doido', // Valor padrão caso não use o Provider   
})