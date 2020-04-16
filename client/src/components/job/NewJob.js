//describes what employer is looking for
//will have an apply button that sends resume?

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerNewJob } from "../../actions/authActions";
import classnames from "classnames";

class NewJob extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      title: this.state.title,
      description: this.state.description,
    };

    this.props.registerNewJob(newJob);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Create</b> job below
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  // value={this.state.name}
                  // error={errors.name}
                  id="title"
                  type="text"
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field col s12">
                <textarea
                  onChange={this.onChange}
                  // value={this.state.email}
                  // error={errors.email}
                  id="description"
                  type="text"
                  className={classnames("materialize-textarea", {
                    // invalid: errors.email,
                  })}
                />
                <label htmlFor="description">Description</label>
                {/* 
                <textarea
                  id="textarea1"
                  class=""
                ></textarea>
                <label for="textarea1">Textarea</label> */}
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
NewJob.propTypes = {
  registerNewJob: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});
//export default NewJob;
export default connect(mapStateToProps, { registerNewJob })(withRouter(NewJob));
