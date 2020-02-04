import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../redux/actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    onSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        const post = {
            title: this.state.title,
            body: this.state.body

        }

        // call action
        this.props.createPost(post)
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title: </label> <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Body: </label> <br />
                        <textarea name="body" id="" cols="70" rows="10" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);