import Data from "../DummyData/Data";
import axios from "axios";

const userActions = () => async (disptach) => {
  // const userData =Data


  disptach({
    type: "GET_USER_DATA",
    payload: {
      allUser: userData,
    },
  });
};
export default userActions;
