//nav bar says view jobs...
//directs to a page where people posted jobs
//this page leads to different applications

import React, { Component } from "react";

class ApplyJob extends Component {
  render() {
    return (
      <div>
        {/* display job title and desriptions */}
        {/* SHOOULD SHOW THE SPECIFIC JOB CLICKED */}
        <form action="#">
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
