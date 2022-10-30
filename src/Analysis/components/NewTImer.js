import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer() {
    const [diff, setDiff] = useState(0);
    useEffect(() => {
        
        if (localStorage.getItem('starttime') !== null) {
            const old = new Date(parseInt(localStorage.getItem('starttime')));
            const curr = Date.now();
            setDiff((43200000 - new Date(curr - old)) / 1000);
            console.log(diff);
        }
    }, [])
    const expiryTimestamp = new Date();
    
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + diff); // 10 minutes timer
    const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart, } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{ textAlign: 'center' }}>

            <div style={{ fontSize: '3rem' }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + diff);
                restart(time)
            }}>Restart</button>
        </div>
    );
}

// export default function TimerWrapper() {

//     return (
//         <div>
//             <MyTimer  />
//         </div>
//     );
// }