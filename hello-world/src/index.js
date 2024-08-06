import React, {Component}from 'react';
import ReactDOM from 'react-dom/client';
import UserProfile from './update';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserProfile: true
    };
  }

  // 切換 UserProfile 組件顯示狀態
  toggleUserProfile = () => {
    this.setState(prevState => ({
      showUserProfile: !prevState.showUserProfile
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleUserProfile}>
          {this.state.showUserProfile ? 'Hide' : 'Show'} User Profile
        </button>
        {this.state.showUserProfile && <UserProfile />}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
