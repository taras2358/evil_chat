import PropTypes from "prop-types";
import React from "react";

import ProductList from "components/store/product/list.jsx";

export default class StoreIndex extends React.Component {
  static propTypes = {
    products: PropTypes.array
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { products: this.props.products };
  }

  // updateName = (name) => {
  // this.setState({ name });
  // };
  render() {
    const productsCount = this.state.products.length;
    const { products } = this.state.products;
    return (
      <div>
        <h3>Ecommerce Landing Page</h3>
        <hr />
        <ProductList products={products} />
        <div>Products count: {productsCount}</div>
      </div>
    );
  }
}
