const initialState = {
  url: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_URL_MODAL":
      return { ...state, url: action.url };

    default:
      return state;
  }
};
