import { useEffect, useState } from 'react';

import './App.css';
import CircleProgress from './CircleProgress';
import Timer from './Timer';

function App() {

  const [progress, setProgresss] = useState(0);
  const [timers, setTimers] = useState({
    'pomodoro': 120,
    'short': 60,
    'long': 240
  });

  const [timerName, setTimerName] = useState('pomodoro')
  const [timer, setTimer] = useState(timers['pomodoro'])



  useEffect(() => {
    console.log('timer change!')
    const step = 100 / timer;
    setProgresss(0);
    const interval = setInterval(() => setProgresss((state) => Math.min(state + step, 100)), 1000)
    return () => clearInterval(interval);
  }, [timer]);


  const changeTimer = (index) => () => {
    console.log(`setTimer to [${index}] ${timers[index]}`);
    setTimerName(index);
    setTimer(timers[index]);
  }

  return (
    <main className="flex main">
      <div><h1 className="text-secondary">Pomodoro</h1></div>
      <ul className="timer-list">
        <li className={"timer-item " + (timerName === 'pomodoro' && "active") }  onClick={changeTimer('pomodoro')}>pomodoro</li>
        <li className={"timer-item " + (timerName === 'short' && "active") } onClick={changeTimer('short')}>short break</li>
        <li className={"timer-item " + (timerName ==='long' && "active") } onClick={changeTimer('long')}>long break</li>
      </ul>
      <div className="progress">
        <CircleProgress stroke={10} radius={170} progress={progress}></CircleProgress>
        <div className="timer">
          <Timer timeSec={timer}></Timer>
        </div>
      </div>
      <div></div>
    </main>
  );
}

export default App;
