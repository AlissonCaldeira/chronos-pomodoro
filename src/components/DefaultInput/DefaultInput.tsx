

type DefaultInputProps = {
    /*type: 'text' | 'number' | 'search'; 
     Isso é feito para definir o valor exato irá ser aceito por essa prop*/
    /*a - | - é utilizada para poder ter mais de um valor aceito */

    id: string;
} & React.ComponentProps<'input'> /* Pegas as props do input no caso seria o type*/
/* Requer que o componente tenha as minhas props + as props definidas depois do &*/

export function DefaultInput({ id, type }: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>task</label>
            <input id={id} type={type} />
        </>
    )
}