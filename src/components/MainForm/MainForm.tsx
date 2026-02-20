import { PlayCircleIcon } from "lucide-react"
import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"

export function MainForm() {

    return (
        <form className='form' action="">
            <div className="formRow">
                <DefaultInput id='meuInput' labelText='Task' type='text' placeholder='Digite Algo' />
            </div>
            <div className="formRow">
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
            <div className="formRow">
                <Button icon={<PlayCircleIcon />} />
            </div>
        </form>

    )
}