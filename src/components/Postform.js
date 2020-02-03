import React, { Component } from 'react'

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


        const options = {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        };





        fetch('https://jsonplaceholder.typicode.com/posts', options)

            .then(res => res.json())
            .then(res => console.log(res));

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
                        <textarea name="body" id="" cols="30" rows="10" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default Postform;