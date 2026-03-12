import { SaveIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { toastifyAdapter } from "../../adapters/toastifyAdapter";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";



export function Settings() {
    useEffect(() => {
        document.title = 'Configurações - Chronos Pomodoro'
    }, [])

    const { state, dispatchTask } = useTaskContext();

    const workTimeInputRef = useRef<HTMLInputElement>(null)
    const shortBreakTimeInputRef = useRef<HTMLInputElement>(null)
    const longBreakTimeInputRef = useRef<HTMLInputElement>(null)

    function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const workTime = Number(workTimeInputRef.current?.value);
        const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
        const longBreakTime = Number(longBreakTimeInputRef.current?.value);

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            toastifyAdapter.dismiss();
            toastifyAdapter.warn('Digite apenas números nos campos')
            return;
        }

        if (workTime < 1 || workTime > 99) {
            toastifyAdapter.dismiss();
            toastifyAdapter.warn('Digite valores entre 1 e 99 para foco')
            return;
        }
        if (shortBreakTime < 1 || shortBreakTime > 30) {
            toastifyAdapter.dismiss();
            toastifyAdapter.warn('Digite valores entre 1 e 30 para descanso curto')
            return;
        }
        if (longBreakTime < 1 || longBreakTime > 60) {
            toastifyAdapter.dismiss();
            toastifyAdapter.warn('Digite valores entre 1 e 60 para descanso longo')
            return;
        }

        dispatchTask({
            type: TaskActionTypes.CHANGE_SETTINGS, payload: {
                workTime,
                shortBreakTime,
                longBreakTime
            }
        })

        toastifyAdapter.success('Configurações salvas');
    }


    return (
        <MainTemplate>
            <Container>
                <Heading>
                    Configurações
                </Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>Modifique as configurações para tempo de foco,descanso curto e descanso longo</p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings} action="" className="form">
                    <div className="formRow">
                        <DefaultInput id='workTime' labelText="Foco"
                            ref={workTimeInputRef}
                            defaultValue={state.config.workTime}
                            type='number' />
                    </div>
                    <div className="formRow">
                        <DefaultInput id='shortBreakTime' labelText="Descanso curto"
                            ref={shortBreakTimeInputRef}
                            defaultValue={state.config.shortBreakTime}
                            type='number' />
                    </div>
                    <div className="formRow">
                        <DefaultInput id='longBreakTime' labelText="Descanso longo"
                            ref={longBreakTimeInputRef}
                            defaultValue={state.config.longBreakTime}
                            type='number' />
                    </div>
                    <div className="formRow">
                        <Button icon={<SaveIcon />}
                            onClick={() => 1 + 1}
                            aria-label="Salvar configurações"
                            title="Salvar configurações" />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}