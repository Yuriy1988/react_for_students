import React from 'react';

import ProductList from './produc-list/product-list-component';
import Cart from './cart/cart-component';
import Filter from './filter/filter-component';
import styles from './shop.scss';

const cars = [
  {
    name: 'BMW',
    price: 50000,
    inCart: 0,
  }, {
    name: 'Audi',
    price: 40000,
    inCart: 0,
  }, {
    name: 'Lada',
    price: 500,
    inCart: 0,
  }, {
    name: 'Fiat',
    price: 12000,
    inCart: 0,
  }, {
    name: 'Renault',
    price: 14000,
    inCart: 0,
  },
];

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars,
      filterValue: '',
      sortByValue: '',
    };
  }

  addToCart = (name) => {
    this.setState({
      cars: this.state.cars.map(c => {
        return c.name === name
          ? { ...c, inCart: c.inCart + 1 }
          : c;
      }),
    });
  };

  removeFromCart = (name) => {
    this.setState({
      cars: this.state.cars.map(c => {
        if (c.inCart < 1) {
          return c;
        }
        return c.name === name
          ? { ...c, inCart: c.inCart - 1 }
          : c;
      }),
    });
  };

  handleFilterChange = (e) => {
    if (!e.target.value) {
      this.setState({
        filterValue: e.target.value,
      });
      return;
    }

    this.setState({
      filterValue: e.target.value,
    });
  };

  handleSort = (sortByValue) => {
    this.setState({
      sortByValue,
    });
  };

  getSortedProducts = (products, sortByValue) => {
    if (!sortByValue) {
      return products;
    }

    return [...products].sort((a, b) => a[sortByValue] > b[sortByValue] ? 1 : - 1);
  };

  getFilteredProducts = (products, filterValue, sortByValue) => {
    let filteredProducts = products;

    if (sortByValue) {
      filteredProducts = this.getSortedProducts(filteredProducts, sortByValue);
    }

    if (!filterValue) {
      return filteredProducts;
    }

    return filteredProducts.filter(p => {
      const nameLowerCase = p.name.toLowerCase();
      const filterValueLoverCase = filterValue.toLowerCase();
      return nameLowerCase.includes(filterValueLoverCase);
    });
  };

  getTotalPrice = (products) => {
    return products.reduce((acc, p) => {
      const price = p.inCart * p.price;
      return acc + price;
    }, 0);
  };

  getProductsInCart = (products) => {
    return products
      .filter(p => p.inCart > 0)
      .map(p => p.name)
      .join(', ');
  };

  render() {
    const { cars, filterValue, sortByValue } = this.state;
    const filteredProducts = this.getFilteredProducts(cars, filterValue, sortByValue);
    const totalPrice = this.getTotalPrice(cars);
    const productsInCart = this.getProductsInCart(cars);

    return (
      <div >
        <Filter
          handleFilterChange={this.handleFilterChange}
          handleSort={this.handleSort}
          value={filterValue}
        />
        <div className={styles.shop}>
          <ProductList
            addToCart={this.addToCart}
            products={filteredProducts}
            removeFromCart={this.removeFromCart}
          />
          <Cart
            productsInCart={productsInCart}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    );
  }
}

export default Shop;
