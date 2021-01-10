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

            return [...state, recentPosts, action.payload ]
        default:
            return state;
    }
}