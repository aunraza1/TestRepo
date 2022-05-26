import axios from 'axios';

export const authenticateUser = (email, password) => {
  return async dispatch => {
    dispatch({type: 'GET_LOGIN_PROGRESS'});
    const BASEURL =
      'http://tidy4medevelop-env.eba-izti9tws.us-west-1.elasticbeanstalk.com';
    axios
      .get(`${BASEURL}/users/login/?email=${email}&password=${password}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: 'GET_LOGIN_SUCCESS',
        });
        console.log(response.data);
      })
      .catch(e => {
        dispatch({type: 'GET_LOGIN_ERROR'});
        alert(e);
      });
  };
};
