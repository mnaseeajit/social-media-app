import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./Actions";
import { Link } from "react-router-dom";



function HomePage() {
    const dispatch = useDispatch();
    const {posts , loading} = useSelector(state => state.posts);

    useEffect(()=>{
            dispatch(fetchPosts());
    },[dispatch])

    const SliceTitle = (title) => {
        const maxLength = 30;
        if(title.length > maxLength){
            return title.slice(0,maxLength)+ "...";
        }
        else{
            return title;
        }
    }

    const SliceBody = (body) => {
        const maxLength = 150;
        if(body.length > maxLength){
            return body.slice(0,maxLength)+ "...";
        }
        else{
            return body;
        }
    }

    return (
        <div id="homepage">
           <h1>Social Media for Traveller</h1>
           <input type="text" placeholder="search here"/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
                <div className="items">
                   <img src= {`https://picsum.photos/200?random=${post.id}`} alt="img" />
            
                  <b>{SliceTitle(post.title)}</b>
                  <div className="para">
                      <p>{SliceBody(post.body)}</p>
                      <button><Link to={`/item/${post.id}`}>click</Link></button>
                  </div>
                </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}

export default HomePage;