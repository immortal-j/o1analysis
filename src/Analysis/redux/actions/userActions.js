import Data from "../DummyData/Data"

const userActions = () => async (disptach) => {
  const userData = Data;

  disptach({
    type: "GET_USER_DATA",
    payload: {
      allUser: userData,
    },
  });
};
export default userActions;
