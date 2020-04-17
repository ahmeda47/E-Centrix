//nav bar says view jobs...
//directs to a page where people posted jobs
//this page leads to different applications

import React, { Component } from "react";
import axios from "axios";

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

  render() {
    console.log(this.props);

    return (
      <div>
        {/* display job title and desriptions */}
        {/* SHOOULD SHOW THE SPECIFIC JOB CLICKED */}
        <form action="#">
          <p>{this.state.jobs.title}</p>

          <p>{this.state.jobs.description}</p>

          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
        </form>

        <button>apply</button>
      </div>
    );
  }
}

export default ApplyJob;
