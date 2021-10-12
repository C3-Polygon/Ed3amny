const initialState = {
    userId: "",
  };
  
  export const setUserId = (userId) => {
    return {
      type: "SET_USERID",
      payload: userId,
    };
  };
  
  const userId = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_USERID":
        return { userId: payload };
  
      default:
        return state;
    }
  };
  
  export default userId;