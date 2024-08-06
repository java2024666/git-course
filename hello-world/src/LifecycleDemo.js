import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    // 初始化 state
    this.state = {
      count: 0
    };
    console.log('Constructor')
  }

  // 元件被安裝時（Mount）執行的函數
  componentDidMount() {
    // 模擬 API 請求
    console.log("Component did mount")
  }

  // 元件被更新時（Update）執行的函數
  componentDidUpdate(prevProps, prevState) {
    console.log('component did mount')
  }


  // 元件被移除時（Unmount）執行的函數
  componentWillUnmount() {
    console.log('Component will unmount');
  }

addcount = () => {
  this.setState({count: this.state.count + 1});
};

  render() {
    console.log('render');
    return (
      <div>
        <p>count: {this.state.count}</p>
          <button onClick={this.addcount}>inermrnt</button>
        </div>
    );
  }
}

export default LifecycleDemo;