import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import PostView from '../PostView/PostView';


const Post = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        })
    },[])
    return (
        <Container maxWidth="md">
            {
                posts.map(ps => <PostView posts={ps}></PostView>)
            }
        </Container>
    );
};

export default Post;