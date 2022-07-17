import { LOGIN } from './userModel';


export const userLogin = (user) => (
    {
        type: LOGIN,
        user,
    }
)