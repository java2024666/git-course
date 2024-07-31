import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 初始化 state
    this.state = {
      status: 'not completed'
    };
  }

  // 增加 count 的方法
  toggleStatus = () => {
    this.setState(prevState => ({
      status: prevState.status === "completed" ? "not completed" : "completed"
      
    }));
  }

  render() {
    return (
      <div>
        <h1>Task:</h1>
        <h2>Status: {this.state.status}</h2>
        <button onClick={this.toggleStatus}>
          {this.state.status === "completed" ? "Mark as not completed" : "Mark as completed"}
        </button>
      </div>
    );
  }
}

export default TodoItem;