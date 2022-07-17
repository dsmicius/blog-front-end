import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './favoriteModel';

const defaultState = {
    items: [],
};

const favoriteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            let itemFound = false;
            state.items.map(item => {
                if (item.blogId === action.blog.blogId) {
                    itemFound = true;
                }
            });
            if (!itemFound) {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        action.blog,
                    ],
                };
            }
        }

        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                items: state.items.filter(item => item.blogId !== action.blogId),
            }

        default:
            return state;
    }
};


export default favoriteReducer;