import React from 'react';
import { Link }from 'react-router-dom';
import { connect }from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
  product: state.products.products.find(product => String(product.id) === ownProps.match.params.id),
});

const ProductDetails = (props) => {
  const { product } = props;
  if (!product) return <div> NO product</div>;

  return (
    <div>
      <div>
        <b>Product name: {product.name}</b>
      </div>
      <div>
        <b>Product price $: {product.price}</b>
      </div>
      <button>
        <Link to={`/edit/${product.id}`}>Edit product</Link>
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
)(ProductDetails);
