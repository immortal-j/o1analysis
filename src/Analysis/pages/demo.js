import React, { useState, useEffect } from "react";
import { Steps } from "intro.js-react";
function Demo() {
  const [state, setState] = useState({
    stepsEnabled: false,
    initialStep: 0,
    showProgress:true,
    steps: [
      {
        element: ".user-detail",
        intro: "About User",
      },
      {
        element: ".overall-analysis",
        intro: "Score Distribution",
      },
      {
        element: ".levelwise-analysis",
        intro: "Levelwise Distribution",
      },
      {
        element: ".correct-analysis",
        intro: "No of correct and incorrect questions",
      },
      {
        element: ".subjectWise-analysis",
        intro: "Hard and weak topics",
      },
    ],
  });
  const options={
    showProgress: true,
  }

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
        options={options}
        steps={state.steps}
        initialStep={state.initialStep}
        onExit={onExit}
      />
      <button class="world" onClick={toggleSteps}>
        Start Tutorial
      </button>
    </div>
  );
}

export default Demo;