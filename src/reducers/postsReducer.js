import {
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from '../actions/types';

const init_state = {
    recentPosts: [],
    resultsPost: [], 
}

export default function(state = init_state, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            const recentPosts = action.payload;
            return {
                ...state, 
                recentPosts 
            }
        case SET_RESULTS_POSTS:
            const resultsPosts = action.payload;
            return {
                ...state,
                resultsPosts
            }
        default:
            return state;
    }
}