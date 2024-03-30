import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './HomePage';

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector(state =>
    state.posts.posts.find(post => post.id === parseInt(id))
  );

  const showdetail = (post) => {
    console.log(post.body);
     return (
        <p>{post.body}</p>
     )
  }

  const showInfo = (post) => {
    console.log(post);
    return (
        <p>Post was posted by {post.id}</p>
    )
  }

  return (
    <div id='detailPage'>
      
      {post ? (
        <div>
            <h1>Post Detail id:{post.id}</h1>
          <div className='postdetail'>
             <img src= {`https://picsum.photos/200?random=${post.id}`} alt="img" />
             <div>
                <button onClick={()=>showdetail(post)}>Detail</button>
                <button onClick={()=>showInfo(post)}>User Info</button>
                 <h2>{post.title}</h2>
                 <p>{post.body}</p>
                 <p>User ID: {post.userId}</p>
            </div>
          </div>
    
           <HomePage />
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default DetailPage;
