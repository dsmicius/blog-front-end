import { ADD_TO_FAVORITE } from './favoriteModel';

const defaultState = {
    items: [],
}

const favoriteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            console.log("action payload",action.blog)
            return state
        }
        default:
            return state
    }
    return state
}

export default favoriteReducer