export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const successfulLogin = () => ({type: LOGIN_SUCCESSFUL});
export const failedLogin = () => ({type: LOGIN_FAILED});


//USER DATA
export const USER_RESPONSE_SUCCESS = 'USER_RESPONSE_SUCCESS';
export const userResponseSuccess = (data) => ({type: USER_RESPONSE_SUCCESS, data});

//Unauthorized
export const UNAUTHORIZED_USER = 'UNAUTHORIZED_USER';
export const userUnauthorized = () => ({type: UNAUTHORIZED_USER});