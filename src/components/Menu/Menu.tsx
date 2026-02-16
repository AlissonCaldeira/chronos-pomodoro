import { HistoryIcon, HouseIcon, MoonIcon, Settings, SunIcon } from 'lucide-react'
import styles from './Menu.module.css'
import { useState, useEffect } from 'react'
/* Pode ser qualquer nome no lugar do styles*/



export function Menu() {
    const [theme,setTheme] = useState<'dark' | 'light'>(() => {
        const storageTheme = localStorage.getItem('theme') as 'dark' | 'light' ; // Preveni do valor poder ser outro

        return storageTheme === 'light'? 'light' : 'dark'; // Preveni do valor ser nulo
    });


    const nextThemeIcon = {
        dark:<SunIcon />,
        light: <MoonIcon />,
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault(); /* Previne que o evento aconteça
        Nesse caso seria de ir para a página referente */
        
       setTheme(prevTheme => {
        const nextTheme = prevTheme === 'dark'? 'light' : 'dark';
        return nextTheme;
       })
    }

useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme) //Altera o valor do atributo no HTML
    localStorage.setItem('theme', theme)
}, [theme])  // Executa apenas quando o valor do theme muda

      
    return (

        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#" aria-label= "Ir para a Home" title= "Ir para a Home"><HouseIcon /></a>
            <a className={styles.menuLink} href="#" aria-label= "Ver Histórico" title= "Ver Histórico"><HistoryIcon /></a>
            <a className={styles.menuLink} href="#" aria-label= "Configurações" title= "Configurações"><Settings /></a>
            <a 
                className={styles.menuLink} 
                href="#" aria-label= "Mudar Tema" 
                title= "Mudar Tema" 
                onClick={handleThemeChange}
            > 
                {nextThemeIcon[theme]}
            </a>

        </nav>
    )
}
