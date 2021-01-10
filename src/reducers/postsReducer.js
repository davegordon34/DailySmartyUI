import {
    SET_RECENT_POSTS
} from '../actions/types';

const init_state = {
    posts: [],
    recentPosts: [], 
}

export default function(state = init_state, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            const recentPosts = action.payload;
            return {
                ...state, 
                recentPosts 
            }
        default:
            return state;
    }
}