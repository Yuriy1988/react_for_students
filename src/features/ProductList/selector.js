export const getProducts = (state) => {
  const { products } = state.products;
  const { sortByPrice, searchQuery } = state.filter;
  let filteredProducts = sortByPrice
    ? [...products].sort((a,b) => a.price > b.price ? 1 : -1)
    : products;

  filteredProducts = searchQuery
    ? filteredProducts.filter(product => (
      product.name.toLowerCase().includes(searchQuery)
    ))
    : filteredProducts;

  return filteredProducts;
};
