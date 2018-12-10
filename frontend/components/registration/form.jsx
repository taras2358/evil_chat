import React from "react";
import HttpClient from "utils/http_client";
import Input from "components/input/index.jsx";
import "./form.scss";
// import PropTypes from "prop-types";

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
    const { name: inputName, value } = event.target;
    this.setState({ [inputName]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const requestBody = JSON.stringify(this.state);
    const client = HttpClient;
    const request = client.post("/registrations", requestBody);

    request
      .then(() => {
        window.location.href = "/";
      })
      .catch(body => {
        this.setState({ errors: body.errors });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label="Email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          errors={this.state.errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          errors={this.state.errors.password}
        />
        <Input
          label="Password confirmation"
          type="password"
          name="password_confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleChange}
          errors={this.state.errors.password_confirmation}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
