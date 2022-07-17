import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './Favorite/favoriteReducer';
import userReducer from './User/userReducer';


export default configureStore({
    reducer: {
        favorite: favoriteReducer,
        user: userReducer,
    }
})