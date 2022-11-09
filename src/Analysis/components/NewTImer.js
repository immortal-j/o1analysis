import { Button } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';
function MyTimer({ expiryTimestamp, diff, timerstarted, handleTimer, autostart }) {

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
  } = useTimer({ expiryTimestamp, autoStart: true });


  return (
    <TimerCSS style={{ textAlign: 'center' }}>
      {timerstarted ? (<div style={{ fontSize: '1rem', color: 'black' }}>
        <span className='timeStamp' >{hours}</span><span className="colon">:</span><span className='timeStamp'>{minutes}</span><span className="colon">:</span><span className='timeStamp'>{seconds}</span>
      </div>) :
        (<Button variant='contained' sx={{
          background: "#2C6DE7", margin: '1rem 0', marginTop: "2rem", width: "15%"
        }} onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          handleTimer(true);
          localStorage.setItem('starttime', Date.now());
          time.setSeconds(time.getSeconds() + diff);
          restart(time)
        }}>Start</Button>)
      }
      {/* {
        !timerstarted &&
        <Button onClick={start} variant='contained' sx={{
          background: "#2C6DE7", margin: '1rem 0', marginTop: "2rem", width: "15%"
        }}> Start</Button>} */}

      {/* <Button onClick={pause} variant='contained' sx={{
        background: "#2C6DE7", margin: '0.5rem 0',
        width: "10%"
      }}>Pause</Button>

      <Button onClick={resume} variant='contained' sx={{
        background: "#2C6DE7", margin: '0.5rem 0',
        width: "10%"
      }}>Resume</Button>

      <Button onClick={restart} variant='contained' sx={{
        background: "#2C6DE7", margin: '0.5rem 0',
        width: "10%"
      }}>restart</Button> */}

    </TimerCSS>
  );
}

export default function App(props) {
  const [diff, setDiff] = useState(0);
  const [autostart, setAutostart] = useState(false);
  const time = new Date();
  useEffect(() => {
    console.log(localStorage.getItem('starttime'));
    const old = localStorage.getItem('starttime')
    if (old !== null) {
      const curr = Date.now();
      console.log(curr - old);
      setDiff(43200 - ((curr - old) / 1000));
      setAutostart(true);
      props.handleTimer(true);
      time.setSeconds(time.getSeconds() + 43200 / 2 - ((curr - old) / 1000));
    }
    else {
      setDiff(43200);
      // localStorage.setItem('starttime',Date.now());
      time.setSeconds(time.getSeconds() + 43200);
    }
  }, [0])

  return (
    <div>
      <MyTimer expiryTimestamp={time} diff={diff} timerstarted={props.timerstarted} handleTimer={props.handleTimer} autostart={autostart} />
    </div>
  );
}

const TimerCSS = styled.div`
margin: 1.5rem 0;
.timeStamp{
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #535353; 
  font-size: 2rem;
   color:white;
   @media screen and (max-width:600px){
    font-size: 1rem;
   }
}
.colon{
  font-size: 2rem;
  font-weight: 900;
  color:grey;
  margin:0 0.6rem;

}`