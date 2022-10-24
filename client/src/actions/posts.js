import * as api from '../api/index.js';

// Action Creators return action, action is type/payload object -> thunk format

// view feed(fetch all)
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}
// new memory(post)
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}