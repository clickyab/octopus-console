export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const successfulLogin = () => ({type: LOGIN_SUCCESSFUL});
export const failedLogin = () => ({type: LOGIN_FAILED});