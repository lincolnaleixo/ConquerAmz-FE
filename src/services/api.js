export const testApi = 'http://localhost:3000';

export const allUsers = `${process.env.VUE_APP_API_ENDPOINT}/api/v1/users`;
export const user = `${process.env.VUE_APP_API_ENDPOINT}/api/v1/user`;

export const RegisterUser = `${process.env.VUE_APP_API_ENDPOINT}/api/user/register`;
export const LoginUser = `${process.env.VUE_APP_API_ENDPOINT}/api/user/login`;
export const GetUser = `${process.env.VUE_APP_API_ENDPOINT}/api/user/me`;

export const GetUserConfig = `${process.env.VUE_APP_API_ENDPOINT}/api/user/get-sp-auth`;
export const SetUserConfig = `${process.env.VUE_APP_API_ENDPOINT}/api/user/save-sp-auth`;
