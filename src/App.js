import React, { Component } from "react";
import { Link } from "react-router";
import { HiddenOnlyAuth, VisibleOnlyAuth } from "./util/wrappers.js";
// import AppBar from "@material-ui/core/AppBar";
// import ToolBar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

// UI Components
import LoginButtonContainer from "./user/ui/loginbutton/LoginButtonContainer";
import LogoutButtonContainer from "./user/ui/logoutbutton/LogoutButtonContainer";

// Styles
import "./css/oswald.css";
// import "./css/open-sans.css";
// import "./css/pure-min.css";
// import "./App.css";

class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() => (
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">
            Dashboard
          </Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">
            Profile
          </Link>
        </li>
        <LogoutButtonContainer />
      </span>
    ));

    const OnlyGuestLinks = HiddenOnlyAuth(() => (
      <span>
        <LoginButtonContainer />
      </span>
    ));

    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
          <Link to="/" className="pure-menu-heading pure-menu-link">
            INK
          </Link>
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App;
