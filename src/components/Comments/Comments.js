import React, { useState, useEffect } from 'react';
import ShowComments from '../ShowComments/ShowComments';

const Comments = (props) => {
    const {id} = props;
    const [comments,setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    })
    return (
        <div>
            {
                comments.map(cmt => <ShowComments comment={cmt}></ShowComments>)
            }
        </div>
    );
};

export default Comments;