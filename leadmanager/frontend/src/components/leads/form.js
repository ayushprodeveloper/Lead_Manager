import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../action/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static proptypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <h1>Add Lead Here</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={name}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={email}
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <input
              type="text"
              className="form-control"
              name="message"
              onChange={this.onChange}
              value={message}
              placeholder="Enter Message"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
