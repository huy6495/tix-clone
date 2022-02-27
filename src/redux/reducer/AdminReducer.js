const initialState = {
  arrayUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARRAY_USERS":
      return { ...state, arrayUsers: action.arrayUsers };

    default:
      return state;
  }
};
