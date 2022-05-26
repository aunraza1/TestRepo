const INITIAL_STATE = {
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_LOGIN_PROGRESS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'GET_LOGIN_ERROR':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
