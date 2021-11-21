import { useEffect, useState } from 'react';
import './Timer.css';

const zeroPad = (num, places) => String(num).padStart(places, '0')


function Timer(props) {
    const [timer, setTimer] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [lastTimer, setLastTimer] = useState(0);

    useEffect(() => {
        console.log(`new timeSec=${props.timeSec}`)
        if(lastTimer != props.timeSec) {
            setLastTimer(props.timeSec);
            setTimer(props.timeSec);
        }
        const intervalId = setInterval(() =>
            setTimer(timer => {
                setSeconds(timer % 60);
                setMinutes(Math.floor(timer / 60));
                return Math.max(timer - 1, 0);
            }), 1000)
        if (props.stop) {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [props.timeSec, props.stop])

    return (
        <div>
            <p className="timer-digit">{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</p>
        </div>
    )
}

export default Timer;