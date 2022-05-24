import React, { useEffect, useReducer } from "react";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";

  // Tour steps
const TOUR_STEPS = [
  {
    target: ".user-detail",
    disableBeacon: true ,
    content: "This is where you can search the dashboard.",
  },

  {
    target: ".subjectwise-analysis",
    content: "This is where you can search the dashboard.",
  },

  {
    target: ".right-wrong-analysis",
    content: "This is where you can search the dashboard.",
  },

  {
    target: ".subjectwise-linegraph-analysis",
    content: "This is where you can search the dashboard.",
  },
];
// Initial state for the tour component
const INITIAL_STATE = {
    key: new Date(), // This field makes the tour to re-render when we restart the tour
    run: false,
    continuous: true, // Show next button
    loading: false,
    stepIndex: 0, // Make the component controlled
    steps: TOUR_STEPS
  };
  
const reducer = (state = INITIAL_STATE, action) => {
    // TODO: Implement reducer  
    switch (action.type) {
        // start the tour
        case "START":
          return { ...state, run: true };
        // Reset to 0th step
        case "RESET":
          return { ...state, stepIndex: 0 };
        // Stop the tour
        case "STOP":
          return { ...state, run: false };
        // Update the steps for next / back button click
        case "NEXT_OR_PREV":
          return { ...state, ...action.payload };
        // Restart the tour - reset go to 1st step, restart create new tour
        case "RESTART":
          return {
            ...state,
            stepIndex: 0,
            run: true,
            loading: false,
            key: new Date()
          };
        default:
          return state;
      }
  };
  
  // Tour component
  const Tour = () => {
    // Tour state is the state which control the JoyRide component
    const [tourState, dispatch] = useReducer(reducer, INITIAL_STATE);
  

  
    const callback = data => {
      const { action, index, type, status } = data;
      
      // TODO: Capture close, skip, next / prev action
      
    if (
        // If close button clicked then close the tour
        action === ACTIONS.CLOSE ||
        // If skipped or end tour, then close the tour
        (status === STATUS.SKIPPED && tourState.run) ||
        status === STATUS.FINISHED
      ) {
        dispatch({ type: "STOP" });
      } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
        // Check whether next or back button click and update the step
        dispatch({
          type: "NEXT_OR_PREV",
          payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) }
        });
    };
}
    const startTour = () => {
      // TODO: Start the tour manually
      dispatch({ type: "RESTART" });
    };
      useEffect(() => {
      // TODO: Auto start the tour
      dispatch({ type: "START" });
    }, []);

// Tour component

  return (
    <>
      <JoyRide
         {...tourState}
         // Callback will pass all the actions
        
      />
    </>
  );
};

export default Tour;
