import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      comments: []
    };
  }

  componentDidMount = () => {
    axios
    .get(`/api/restaurant/${this.props.restaurant.id}/comments`)
    .then(response => {
      this.setState({comments: response.data});
      this.setState({loading: false});
    })
  }

  renderComments = () => {

  }

  render() {
    const { loading, comments } = this.state;
    const { restaurant } = this.props;
    return(
      <div>
        { 
          loading ? 
          (<div>Loading...</div>) : 
          (
            <div className='comment-container'>
            {
              comments.map((comment, index) => {
                return (<div key={`${index}-comment-${restaurant.nameId}`} className='comment'>
                  <div className='comment-name'>{comment.name}</div>
                  <div className='comment-content'>{comment.content}</div>
                </div>)
              })
            }
            </div>
          )
        }
      </div>
    );
  }
}

export default CommentList;