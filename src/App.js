import React, { Component } from 'react';
import productsDb from './productsDb';

import Filter from './features/Filter/Filter';
import ProductList from './features/ProductList/ProductList';
import Cart from './features/Cart/Cart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: productsDb,
      isSorted: false,
      searchValue: '',
    };
  }

  addToCart = (id) => {
    this.setState({
      products: this.state.products.map(product => product.id === id
        ? { ...product, inCart: product.inCart + 1 }
        : product
      ),
    });
  };

  sortByPrice = () => {
    this.setState({
      isSorted: true,
    });
  };

  searchByName = (value) => {
    this.setState({
      searchValue: value.toLowerCase(),
    });
  };

  removeFromCart = (id) => {
    this.setState({
      products: this.state.products.map(product => {
        const updatedProduct = product.inCart === 0
          ? product
          : { ...product, inCart: product.inCart - 1 };
        return product.id === id
          ? updatedProduct
          : product;
      }),
    });
  };

  render() {
    const { products } = this.state;
    const { isSorted, searchValue } = this.state;
    let filteredProducts = isSorted
      ? [...products].sort((a,b) => a.price > b.price ? 1 : -1)
      : products;

    filteredProducts = searchValue
      ? filteredProducts.filter(product => (
        product.name.toLowerCase().includes(searchValue)
      ))
      : filteredProducts;

    return (
      <div>
        <Filter
          searchByName={this.searchByName}
          sortByPrice={this.sortByPrice}
        />
        <div className='flex'>
          <ProductList
            addToCart={this.addToCart}
            products={filteredProducts}
            removeFromCart={this.removeFromCart}
          />
          <Cart products={products} />
        </div>
      </div>
    );
  }
}

export default App;
