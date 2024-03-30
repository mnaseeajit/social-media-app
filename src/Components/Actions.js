export const fetchPostsRequest = () => ({
    type: 'FETCH_POSTS_REQUEST',
  });
  
  export const fetchPostsSuccess = posts => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts,
  });
  
  export const fetchPostsFailure = error => ({
    type: 'FETCH_POSTS_FAILURE',
    payload: error,
  });
  
  export const fetchPosts = () => {
    return async dispatch => {
      dispatch(fetchPostsRequest());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        console.log(data);
        dispatch(fetchPostsSuccess(data));
      } catch (error) {
        dispatch(fetchPostsFailure(error.message));
      }
    };
  };
  