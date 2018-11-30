import PropTypes from 'prop-types';
import React from 'react';

export default class StoreIndex extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    // this.state = { name: this.props.name };
  }

  // updateName = (name) => {
    // this.setState({ name });
  // };

  render() {
    return (
      <div>
        <h3>
          Ecommerce Landing Page
        </h3>
        <hr />
      </div>
    );
  }
}

