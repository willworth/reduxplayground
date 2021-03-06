import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/postActions'
class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }


    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.newPost !== prevProps.newPost) {
            console.log("not the same!")
            this.props.posts.unshift(this.props.newPost);
        }
    }



    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>

                {postItems}
            </div>
        )
    }
}


Posts.protoTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})


export default connect(mapStateToProps, { fetchPosts })(Posts);