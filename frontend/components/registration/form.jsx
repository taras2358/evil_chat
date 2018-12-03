// import PropTypes from "prop-types";
import React from "react";

export default class RegistrationForm extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;
    this.setState({ [inputName]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify(this.state);

    const request = async () => {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": ReactOnRails.authenticityToken()
        },
        body: body
      };
      const response = await fetch("/registrations", settings);
      const json = await response.json();
      return json;
    };

    request().then(body => {
      console.log(body);
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
            <span className="field-error">{this.state.errors.email}</span>
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <span className="field-error">
              {this.state.errors.password ? this.state.errors.password[0] : ""}
            </span>
          </div>
          <div>
            <input
              type="text"
              name="password_confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
            <br />
            <span className="field-error">
              {this.state.errors.password_confirmation}
            </span>
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
