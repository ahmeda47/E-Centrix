//nav bar says view jobs...
//directs to a page where people posted jobs
//this page leads to different applications

import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

class ViewJobs extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    Axios.get("/api/users/viewjobs").then((res) => {
      this.setState({ jobs: res.data });
      console.log(res.data);
    });
  }

  showJob() {
    //when id is clicked send value of id as request to router
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* {job.title} */}
        {/* clicking on a job just make a post request to '/job/:id' */}
        {/* put the above in a list and map it */}
        <h1>job list </h1>
        <ul>
          {this.state.jobs.map((job) => (
            <li>
              {/* add get request route for add id with new page */}
              <a href={"api/users/jobs/" + job._id}>{job._id}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewJobs;
