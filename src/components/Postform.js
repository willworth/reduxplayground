import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };


        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form action="">
                    <div>
                        <label htmlFor="">Title: </label> <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Body: </label> <br />
                        <textarea name="body" id="" cols="30" rows="10" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br />
                </form>
                <button type="submit">Submit</button>
            </div>
        )
    }
}


export default Postform;