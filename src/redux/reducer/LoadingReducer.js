const initialState = {
  isLoadingCarousel: true,
  isLoadingSlider: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case "DISPLAY_LOADING_DETAIL":
    //   return { ...state, isLoadingDetail: true };
    case "HIDE_LOADING_CAROUSEL":
      return { ...state, isLoadingCarousel: false };
    case "HIDE_LOADING_SLIDER":
      return { ...state, isLoadingSlider: false };
    case "HIDE_LOADING_DETAIL":
      return { ...state, isLoadingDetail: false };

    default:
      return state;
  }
};
