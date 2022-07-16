import { ADD_TO_FAVORITE } from './favoriteModel';

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
        default:
            return state;
    }
};


export default favoriteReducer;