const initialState = {
  url: "https://youtu.be/kBY2k3G6LsM",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_URL_MODAL":
      return { ...state, url: action.url };

    default:
      return state;
  }
};
