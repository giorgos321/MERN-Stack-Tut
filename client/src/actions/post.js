import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
} from '../actions/types';

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('api/posts/');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Like a post
export const addlike = (postid) => async (dispatch) => {
  try {
    const res = await axios.put(`api/posts/like/${postid}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { postid, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Remove Like
export const removelike = (postid) => async (dispatch) => {
  try {
    const res = await axios.put(`api/posts/unlike/${postid}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { postid, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Post
export const deletePost = (postid) => async (dispatch) => {
  try {
    await axios.delete(`api/posts/${postid}`);

    dispatch({
      type: DELETE_POST,
      payload: postid,
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const res = await axios.post('api/posts/', formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get post
export const getPost = (postid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postid}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
