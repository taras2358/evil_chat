import React from "react";
import HttpClient from "utils/http_client";
import Routes from "utils/routes";
import Input from "components/input/index.jsx";
import "./form.scss";
// import PropTypes from "prop-types";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const requestBody = {
      email: this.state.email,
      password: this.state.password
    };
    const client = HttpClient;
    const request = client.post(
      Routes.login_path(),
      JSON.stringify(requestBody)
    );

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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
