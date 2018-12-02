import PropTypes from 'prop-types';
import React from 'react';

import ProductTile from 'components/store/product/tile.jsx';

export default class ProductList extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  renderProduct(product, i) {
    return (<ProductTile key={i} name={product.name}/>);
  }

  renderProducts() {
    let result = [];
    let products = this.props.products;
    products.map((product, i) => { result.push(this.renderProduct(product, i)) })

    return result;
  }

  render() {
    return (
      <ul>{this.renderProducts()}</ul>
    );
  }
}
