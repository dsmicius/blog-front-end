import { ADD_TO_FAVORITE } from './favoriteModel';

export const addToFavorite = (blog) => (
    {
        type: ADD_TO_FAVORITE,
        blog,
    }
);