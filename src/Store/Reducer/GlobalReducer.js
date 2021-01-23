const initialState = {
  theme: false, // false light, true dark
  language: 'indonesian',
  loading: false,
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: !state.theme,
      };

    case 'SET_LANGUAGE':
      return {
        ...state,
        languange: action.payload,
      };

    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
