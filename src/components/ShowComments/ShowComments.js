import React, { useEffect, useState } from 'react';
import './comment.css';

const ShowComments = (props) => { 
    const {id,name,body,email} = props.comment;
    const [img,setImage] = useState({});
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => setImage(data.url))
    })

    return (
        <div className="comment">
            <img style={{width:"60px",borderRadius:"50%"}} src={img} alt="user"/>
            <h5>From: id {id}</h5>
            <h5>Email: {email}</h5>
            <h3>{name}</h3>
            <p>{body}</p>
        </div>
    );
};

export default ShowComments;