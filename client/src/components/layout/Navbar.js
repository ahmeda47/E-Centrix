import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      // <div className="navbar-fixed">
      //   <nav className="z-depth-0">
      //     <div className="nav-wrapper white">

      //     </div>
      //     <div className="nav-wrapper white">

      //     </div>
      //     <div className="nav-wrapper white">

      //     </div>
      //   </nav>
      // </div>

      <nav>
        <div class="nav-wrapper white">
          {/* <a href="#!" class="brand-logo center">
            Logo
          </a> */}
          <ul class="left hide-on-med-and-down">
            <Link
              to="/dashboard"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo left black-text"
            >
              <i className="material-icons">home</i>
              Home
            </Link>
            <Link
              to="/viewjobs"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">work_outline</i>
              View Jobs
            </Link>
            <Link
              to="/newjob"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo right black-text"
            >
              <i className="material-icons">add</i>
              Post a Job
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
