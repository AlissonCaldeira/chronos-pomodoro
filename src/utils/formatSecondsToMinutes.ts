export function formatSecondsToMinutes(seconds: number) : string{
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
    // esse padStart faz com que caso o valor tenha menos que duas casas decimais ele comece com o 0
    const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');
    return `${minutes}:${secondsMod}`
}