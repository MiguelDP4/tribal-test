import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const comment = {
      name: this.state.name,
      content: this.state.content
    }
    axios
      .post(`/api/restaurant/${this.props.restaurant.id}/comment`, comment)
      .then(response => {
        console.log(response);
        console.log(response.date);
      })
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  }

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  }

  render() {
    return(
      <div>
        <label>Name</label>
        <input
          type="text"
          name="post[name]"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <label>Content</label>
        <textarea
          type="text"
          name="post[content]"
          value={this.state.content}
          onChange={this.handleContentChange}
        />

        <input type="submit" value="Update Post" onClick={this.handleSubmit}/>
      </div>
    );
  }
}


export default Comment;