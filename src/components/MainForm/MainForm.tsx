import { PlayCircleIcon } from "lucide-react"
import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"
import { useRef } from "react";

export function MainForm() {

    const taskNameInput = useRef<HTMLInputElement>(null);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className="formRow">
                <DefaultInput
                    id='meuInput'
                    labelText='Task'
                    type='text'
                    placeholder='Digite Algo'
                    ref={taskNameInput} />
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