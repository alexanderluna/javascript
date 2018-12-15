import React from 'react'
import UserHeader from './UserHeader';

class PostItem extends React.Component {
    render() {
        const { post } = this.props;
        return (
            <div className="item">
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            </div>
        )
    }
}

export default PostItem;
