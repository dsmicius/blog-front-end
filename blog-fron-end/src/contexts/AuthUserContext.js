import { createContext, useState } from 'react';

const AuthUserContext = createContext(null)

const initialAuthUserObj = {
    username: '',
    fullname: '',
    jwtToken: '',
};

export {
    AuthUserContext,
    initialAuthUserObj,
}
