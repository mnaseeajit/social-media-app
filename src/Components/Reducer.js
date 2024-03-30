// import { combineReducers } from 'redux';

// const initialPostsState = {
//   posts: [],
//   loading: false,
//   error: null,
// };

// const postsReducer = (state = initialPostsState, action) => {
//   switch (action.type) {
//     case 'FETCH_POSTS_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_POSTS_SUCCESS':
//       return { ...state, loading: false, posts: action.payload };
//     case 'FETCH_POSTS_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   posts: postsReducer,
// });

import { combineReducers } from 'redux';

const initialPostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
});

