import React, { useEffect, useState } from 'react';
import './comment.css';
import Grid from '@material-ui/core/Grid';

const ShowComments = (props) => { 
    const [img,setImage] = useState({});
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => setImage(data.url))
    })
    const {id,name,body,email} = props.comment;

    return (
        <div className="comment">
            <Grid container justify="space-between" alignItems="flex-end" >
                <Grid item xs={4}>
                    <img style={{width:"60px",borderRadius:"50%"}} src={img} alt="user"/>
                    <h5>From: id {id}</h5>
                    <h5>Email: {email}</h5>
                </Grid>
                <Grid item xs={8}>
                    <h3>{name}</h3>
                    <p>{body}</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default ShowComments;