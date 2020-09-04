import React from 'react';
import Button from '@material-ui/core/Button';
import './postview.css';

const PostView = (props) => {
    const {title,body,id} = props.posts;
    return (
        <div className="postview">
            <h3>{id}: {title}</h3>
            <p>{body}</p>
            <Button variant="contained" color="secondary">
                View Post
            </Button>
        </div>
    );
};

export default PostView;