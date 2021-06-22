export const testApi = 'http://localhost:3000';

export const allUsers = `${process.env.BASE_API}/api/v1/users`;
export const user = `${process.env.BASE_API}/api/v1/user`;

export const RegisterUser = `${process.env.BASE_API}/api/user/register`;
export const LoginUser = `${process.env.BASE_API}/api/user/login`;
// export const LoginUser = `${process.env.BASE_API}/api/user/login`;
export const GetUser = `${process.env.BASE_API}/api/user/me`;

export const GetUserConfig = `${process.env.BASE_API}/api/user/get-sp-auth`;
export const SetUserConfig = `${process.env.BASE_API}/api/user/save-sp-auth`;
