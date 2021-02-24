import React, { Component } from 'react'

export default class AddPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            validTitle: "",
            validInfo: ""
        }
    }

    render() {
        return (
            <div className="addPost">
                <input type="text" required title="not title post" placeholder="type your title...." onChange={(e) => {
                    if (e.target.value.length > 0) {
                        this.setState({ validTitle: e.target.value })
                        console.log(e.target.value);
                    } else {
                        this.setState({ validTitle: "" });
                    }
                }} />
                <br />
                <input type="text" id="" required placeholder="type your post" onChange={(e) => {
                    if (e.target.value.length > 0) {
                        this.setState({ validInfo: e.target.value })
                    } else {
                        this.setState({ validInfo: "" });
                    }
                }} />
                <br />
                <button type="submit" onClick={() => {
                    if (this.state.validTitle.length > 0 && this.state.validInfo.length > 0) {
                        this.props.addPost(this.state.validTitle, this.state.validInfo);
                        debugger
                        let inp = document.querySelectorAll('input')[0].value = "";
                        inp = document.querySelectorAll('input')[1].value = "";
                        console.log(inp);
                    }
                }}>Add Post</button>
            </div>
        )
    }
}
