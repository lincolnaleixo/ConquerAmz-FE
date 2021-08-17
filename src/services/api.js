export const testApi = 'http://localhost:3000';
const BaseUrl = process.env?.VUE_APP_API_ENDPOINT || 'http://localhost:3000';

export const allUsers = `${BaseUrl}/api/v1/users`;
export const user = `${BaseUrl}/api/v1/user`;

export const RegisterUser = `${BaseUrl}/api/user/register`;
export const LoginUser = `${BaseUrl}/api/user/login`;
export const GetUser = `${BaseUrl}/api/user/me`;

export const GetUserConfig = `${BaseUrl}/api/user/get-sp-auth`;
export const SetUserConfig = `${BaseUrl}/api/user/save-sp-auth`;

export const GetInventories = `${BaseUrl}/api/inventories/get-inventories`;
export const GetOrders = `${BaseUrl}/api/get-orders`;
export const GetLatestOrders = `${BaseUrl}/api/get-latest-orders`;
