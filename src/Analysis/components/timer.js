import React, { useState } from "react";

function Timer(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [inter, setinter] = useState();
  const [status, setstatus] = useState(true);
  const [started,setStarted]= useState(false);
  var interval;
  var sec = seconds,
    min = minutes,
    hr = hours,
    inte = inter;
  const start = () => {
    setStarted(true);
    setHours(props.hr);
    setminutes(props.min);
    setseconds(props.sec);
    hr = props.hr;
    min = props.min;
    sec = props.sec;
    interval = setInterval(() => {
      run();
    }, 1000);
    setstatus(false);
    setinter(interval);
  };

  const run = () => {
    sec--;

    if (sec < 0) {
      min -= 1;
      sec = 59;
    }
    if (min < 0) {
      hr -= 1;
      min = 59;
      sec = 59;
    }
    if (hr < 0) {
      hr = 12;
      min = 0;
      sec = 0;
      setHours(hr);
      setminutes(min);
      setseconds(sec);
      setstatus(true);
      setStarted(false);
      clearInterval(interval);
    } else {
      setHours(hr);
      setminutes(min);
      setseconds(sec);
    }
  };
  const stop = () => {
    hr = 12;
    min = 0;
    sec = 0;
    setminutes(min);
    setStarted(false);
    setseconds(sec);
    setstatus(true);
    // console.log(inter);

    clearInterval(inter);
  };

  //  Timer Functions

  return (
    <div>
      {/* <Input handleChange={handleChange} val={time.minutes}/> */}
      {started ? (
        <h1>
          {hours < 10 ? 0 : ""}
          {hours}:{minutes < 10 ? 0 : ""}
          {minutes}:{seconds < 10 ? 0 : ""}
          {seconds}
        </h1>
      ) : (
        ""
      )}
      <button
        style={{
          fontSize: "20px",
          padding: "20px",
          marginTop: started ? "0px" : "20px",
        }}
        onClick={status ? start : stop}
      >
        {status ? "Start Contest" : "End Contest"}
      </button>
    </div>
  );
}

export default Timer;
