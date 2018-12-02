import PropTypes from 'prop-types';
import React from 'react';

export default class ProductTile extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.name}
      </li>
    );
  }
}


