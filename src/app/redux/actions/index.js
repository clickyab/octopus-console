//USER SUCCESSFUL LOGIN
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const successfulLogin = () => ({type: LOGIN_SUCCESSFUL});

//USER SUCCESSFUL LOGOUT
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';
export const successfulLogout = (data) => ({type: LOGOUT_SUCCESSFUL, data});

//USE FOR 'isLogin' OBJECT (UI STATE)
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const failedLogin = () => ({type: LOGIN_FAILED});

//USER DATA
export const USER_RESPONSE_SUCCESS = 'USER_RESPONSE_SUCCESS';
export const userResponseSuccess = (data) => ({type: USER_RESPONSE_SUCCESS, data});

//Unauthorized
export const UNAUTHORIZED_USER = 'UNAUTHORIZED_USER';
export const userUnauthorized = () => ({type: UNAUTHORIZED_USER});

//DEMAND DATA
export const GET_DEMAND_DATA = 'GET_DEMAND_DATA';
export const getDemandData = (data) => ({type: GET_DEMAND_DATA, data});

//SUPPLIER DATA
export const GET_SUPPLIER_DATA = 'GET_SUPPLIER_DATA';
export const getSupplierData = (data) => ({type: GET_SUPPLIER_DATA, data});

//EXCHANGE DATA
export const GET_EXCHANGE_DATA = 'GET_EXCHANGE_DATA';
export const getExchangeData = (data) => ({type: GET_EXCHANGE_DATA, data});

//SIDEBAR MENU STATE
export const SIDEBAR_STATE = 'SIDEBAR_STATE';
export const getSidebarState = (data) => ({type: SIDEBAR_STATE, data});