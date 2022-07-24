import React from "react";
import Header from "./Header.jsx";
import { UserDataContext } from "./context.js";
import "./index.scss";

class App extends React.Component {
  state = {
    userData: {
      name: "Nikola Tesla",
      avatar_url: "https://avatars3.githubusercontent.com/u10001",
    }
  }

  render() {
    return (
      <UserDataContext.Provider value={this.state.userData} >
        <div className="page">
          <Header />
        </div>
      </UserDataContext.Provider>
    );
  }
};

export default App;

