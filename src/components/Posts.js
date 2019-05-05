import React from 'react';
import postData from '../data/posts';
import Post from './Post';

class Posts extends React.Component {

    state = {
        posts: postData
    };

    componentDidMount(){
        console.log(this.state.posts);
    }

    render(){
        return (
            <div className="posts">
                {this.state.posts.map( post => <Post key={post.id} post={post} />)}
            </div>
        )
    }
}

export default Posts;
