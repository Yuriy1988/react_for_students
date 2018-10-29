import React from 'react';

import ProductList from './produc-list/product-list-component';
import Cart from "./cart/cart-component";
import Filter from './filter/filter-component';
import styles from './shop.module.scss';

const cars = [
  {
    name: 'BMW',
    price: '50000',
    inCart: 0,
  }, {
    name: 'Audi',
    price: '40000',
    inCart: 0,
  }, {
    name: 'Lada',
    price: '500',
    inCart: 0,
  },
];

class Shop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cars,
      filterValue: '',
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
        filteredProducts: this.state.cars,
      });
      return;
    }

    const filteredProducts = this.state.cars.filter(p => {
      return p.name.includes(e.target.value);
    });

    this.setState({
      filterValue: e.target.value,
      filteredProducts,
    });
  };

  render() {
    const { cars, filterValue, filteredProducts } = this.state;
    console.log('filteredProducts', filteredProducts);

    return (
      <div >
        <Filter
          handleFilterChange={this.handleFilterChange}
          value={filterValue}
        />
        <div className={styles.shop}>
          <ProductList
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            products={cars}
            className={styles.productList}
          />
          <Cart
            products={cars}
          />
        </div>
      </div>
    );
  }
}


export default Shop;
