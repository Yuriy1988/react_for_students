export const getFilteredProducts = (state) => {
  const { products } = state.products;
  const { sortByPrice, searchValue } = state.filter;
  let filteredProducts = sortByPrice
    ? [...products].sort((a,b) => a.price > b.price ? 1 : -1)
    : products;

  filteredProducts = searchValue
    ? filteredProducts.filter(product => (
      product.name.toLowerCase().includes(searchValue)
    ))
    : filteredProducts;

  return filteredProducts;
};
