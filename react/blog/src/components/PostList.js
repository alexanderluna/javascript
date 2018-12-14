import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions'
import PostItem from './PostItem';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.props.posts.map(post =>
                    <PostItem key={post.id} post={post} />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);