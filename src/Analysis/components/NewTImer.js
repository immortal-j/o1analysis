import React from 'react';
import { useEffect,useState } from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp,diff,timerstarted,handleTimer,autostart }) {

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp,autoStart:true,onExpire: () =>{localStorage.setItem('starttime',Date.now())}   });


  return (
    <div style={{textAlign: 'center'}}>
      {timerstarted?(<div style={{fontSize: '18px',color:'#fff'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>):(<button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        handleTimer(true);
        time.setSeconds(time.getSeconds() + diff);
        restart(time)
      }}>Start</button>)
      }
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button> */}
      {/* <button onClick={resume}>Resume</button> */}
      
    </div>
  );
}

export default function App(props) {
    const [diff,setDiff]=useState(43200);
    const [autostart,setAutostart]=useState(false);
    const time = new Date();
     useEffect(() => {
        
        if (localStorage.getItem('starttime') !== null) {
            const old = localStorage.getItem('starttime');
            const curr = Date.now();
            console.log(curr-old);
            setDiff( 43200-((curr - old)/ 1000));
            setAutostart(true);
            props.handleTimer(true);
            time.setSeconds(time.getSeconds() + 43200/2-((curr - old)/ 1000));
        }
        else
        {
            setDiff(43200);
            localStorage.setItem('starttime',Date.now());
            time.setSeconds(time.getSeconds() + 43200);
        }
    }, [])
    
  return (
    <div>
      <MyTimer expiryTimestamp={time} diff={diff} timerstarted={props.timerstarted} handleTimer={props.handleTimer} autostart={autostart} />
    </div>
  );
}