// import PropTypes from "prop-types";
import React from "react";
import HttpClient from "utils/http_client";
import "./form.scss";

export default class RegistrationForm extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      errors: { email: [], password: [], password_confirmation: [] }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name: inputName, value } = event.target;
    // const inputName = event.target.name;
    // const value = event.target.value;
    this.setState({ [inputName]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const requestBody = JSON.stringify(this.state);
    const client = new HttpClient();

    const request = client.post("/registrations", requestBody);

    request.then(body => {
      this.setState({ errors: body.errors });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <div>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <span className="field-error">{this.state.errors.email[0]}</span>
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <span className="field-error">{this.state.errors.password[0]}</span>
          </div>
          <div>
            <input
              type="password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
            <br />
            <span className="field-error">
              {this.state.errors.password_confirmation[0]}
            </span>
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
