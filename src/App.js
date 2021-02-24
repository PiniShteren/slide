import React, { Component } from 'react'
import "./App.css";
import Post from "./component/Post";
import AddPost from "./component/AddPost";
import Carousel from "./component/Carousel";

export default class App extends Component {
  state = {
    list: [
      { title: 'Israel', info: "Jerusalem" },
      { title: 'Japan', info: 'Tokyo' },
      { title: "Italy", info: "Roma" }]
  }

  delete = (index) => {
    this.setState({ list: this.state.list.filter((e, i) => i !== index) })
  }
  addPost = (title, info) => {
    let newPost = {
      title: title,
      info: info
    }
    this.setState({ list: [...this.state.list, newPost] })
  }
  render() {
    return (
      <div className="App">
        <h1 id="logo">Posts</h1>
        <Carousel />
        <AddPost addPost={this.addPost} />
        {this.state.list.map((e, i) => {
          return <Post key={i} title={e.title} info={e.info} index={i} delete={this.delete} />
        })}
      </div>
    )
  }
}

