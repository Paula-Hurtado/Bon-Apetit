import React from 'react';
import ReactDOM from 'react-dom';

export default class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
        <div className="customContainer">
            <button className="btn btn-primary" onClick={this.handleClick}>
            <i className="fa fa-heart"></i>
            {label}
            </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <LikeButton />,
    document.getElementById('root')
  )

