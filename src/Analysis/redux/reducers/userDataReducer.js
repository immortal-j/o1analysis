import Data from "../DummyData/Data";

const initState = {
  allUser:Data
};

const userDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        allUser: action.payload.allUser,
      };

    default:
      return { ...state };
  }
};

export default userDataReducer;
