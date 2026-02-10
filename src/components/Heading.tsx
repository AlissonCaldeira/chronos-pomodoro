import styles from './Heading.module.css'
/* Pode ser qualquer nome no lugar do styles*/

type HeadingProps = {
    children: React.ReactNode // Recomendável utilizar com children no react
};

export function Heading(/*props*/{ children }: HeadingProps) {
    // La onde esta renderizando o componente é possível passar
    // Essas propriedades dentro do elemento mesmo, sendo um atributo
    // ou um elemento children dele

    // const { children } = props;
    // const children = props.children; outra forma de fazer o comando acima

    // console.log(styles)

    return <h1 className={styles.heading} >{children}</h1>
    // Utilizar duas classes de formatação no componente 
    // className={`${styles.heading} ${styles.purple}`}
}