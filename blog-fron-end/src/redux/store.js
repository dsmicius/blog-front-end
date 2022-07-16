import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './Favorite/favoriteReducer';


export default configureStore({
    reducer: {
        favorite: favoriteReducer,
    }
})