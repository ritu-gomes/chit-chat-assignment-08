import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './single.css';
import Comments from '../Comments/Comments';

const SinglePost = () => {
    const {postId} = useParams();
    const [thePost, setThePost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setThePost(data))
    })
    return (
        <>
            <div className="single-post">
                <h2><small>Post from User-Id: {thePost.userId}</small></h2>
                <h1>{thePost.title}</h1>
                <p>{thePost.body}</p>
            </div>
            <div>
                <h3 style={{textAlign:"center",color:"lightcoral"}}>comments:</h3>
                <Comments id={postId}></Comments>
            </div>
        </>
    );
};

export default SinglePost;