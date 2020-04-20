//nav bar says view jobs...
//directs to a page where people posted jobs
//this page leads to different applications

import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class ApplyJob extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    axios.get(`/api/users/jobs/${params.job}`).then((res) => {
      this.setState({ jobs: res.data });
      console.log(res.data);
    });
  }

  applySuccess() {
    //return <Link to="/success" />;
    //console.log();
    this.props.history.push("/success");
  }

  render() {
    console.log(this.props);

    return (
      <div className="container">
        {/* display job title and desriptions */}
        {/* SHOOULD SHOW THE SPECIFIC JOB CLICKED */}
        <form action="#">
          <p style={{ fontSize: "40px", fontFamily: "monospace" }}>
            {this.state.jobs.title}
          </p>

          <p style={{ fontSize: "25px" }}>{this.state.jobs.description}</p>

          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" id="resume-input" type="text" />
            </div>
          </div>
        </form>

        <button
          className="waves-effect waves-light btn"
          onClick={() => this.applySuccess()}
        >
          apply
        </button>
      </div>
    );
  }
}

export default ApplyJob;
