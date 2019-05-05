import React from 'react';
import Actions from './Actions';

class Post extends React.Component {

    render() {
        const {post} = this.props;

        return (
            <div>
                <div>VoteControl here</div>
                <div>
                    <div>
                        <img src={post.image} />
                    </div>
                    <div>
                        <p>{post.title}</p>
                        <p>
                            <a href={post.url} >{(new URL(post.url)).hostname}</a>
                        </p>
                        <p>Submitted at {post.createTime} by {post.author}</p>
                        <Actions />
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;