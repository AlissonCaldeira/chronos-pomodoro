import styles from './DefaultInput.module.css';


type DefaultInputProps = {
    /*type: 'text' | 'number' | 'search'; 
     Isso é feito para definir o valor exato irá ser aceito por essa prop*/
    /*a - | - é utilizada para poder ter mais de um valor aceito */
    id: string;
    /*labelText?: string; Propriedade opcional*/ 
    labelText: string; /*Propriedade opcional*/ 
} & React.ComponentProps<'input'> /* Pegas as props do input no caso seria o type*/
/* Requer que o componente tenha as minhas props + as props definidas depois do &*/

export function DefaultInput({ id, labelText ,type, ...rest }: DefaultInputProps) {
    return (
        <>
            {/*
            labelText != null? (<label htmlFor={id}>{labelText}</label>) : ''  Condicional dentro do jsx }
            labelText != null && (<label htmlFor={id}>{labelText}</label>) /* If sem o else
            */}

            <label htmlFor={id}>{labelText}</label>
            <input className={styles.input} id={id} type={type} {...rest} />
            {/* o - ...rest - pega outras propriedades passadas que são próprias do input e que não foram passadas no type*/}
        </>
    )
}