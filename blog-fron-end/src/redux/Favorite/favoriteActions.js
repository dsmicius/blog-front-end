import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './favoriteModel';

export const addToFavorite = (blog) => (
    {
        type: ADD_TO_FAVORITE,
        blog,
    }
);

export const removeFromFavorite = (blogId) => (
    {
        type: REMOVE_FROM_FAVORITE,
        blogId,
    }
)