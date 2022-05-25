import React, { useState, useEffect } from "react";
import { Steps } from "intro.js-react";
function Demo() {
  const [state, setState] = useState({
    stepsEnabled: false,
    initialStep: 0,
    steps: [
      {
        element: ".user-detail",
        intro: "About User",
      },
      {
        element: ".overall-analysis",
        intro: "Score Distribution",
      },
    ],
  });

  useEffect(() => {
   toggleSteps();
  },[]);
  const onExit = () => {
    setState((prev) => ({...prev, stepsEnabled: false }));
};

const toggleSteps = () => {
    setState(prev => ({...prev,stepsEnabled: !prev.stepsEnabled }));
};

  return (
    <div>
      <Steps
        enabled={state.stepsEnabled}
        steps={state.steps}
        initialStep={state.initialStep}
        onExit={onExit}
      />
      <button class="world" onClick={toggleSteps}>
        Start Tutorial
      </button>
      <button id="hello">Login Page</button>
    </div>
  );
}

export default Demo;
