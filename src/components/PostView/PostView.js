import React from 'react';
import Button from '@material-ui/core/Button';
import './postview.css';
import { useHistory } from 'react-router-dom';

const PostView = (props) => {
    const {title,body,id} = props.posts;
    const history = useHistory();
    const handleButton = (id) => {
        history.push(`/${id}`);
    }
    return (
        <div className="postview">
            <h3>{id}: {title}</h3>
            <p>{body}</p>
            <Button onClick={() => handleButton(id)} variant="contained" color="secondary">
                View Post
            </Button>
        </div>
    );
};

export default PostView;