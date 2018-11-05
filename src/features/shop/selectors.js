const getSortedProducts = (products, sortedNames) => {
  return sortedNames
    .map(name => products.find(p => p.name === name))
    .filter(Boolean);
};

export const getFilteredProducts = (products, filterValue, sortByValue) => {
  let filteredProducts = products;

  if (sortByValue) {
    filteredProducts = getSortedProducts(filteredProducts, sortByValue);
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

export const getTotalPrice = (products) => {
  return products.reduce((acc, p) => {
    const price = p.inCart * p.price;
    return acc + price;
  }, 0);
};

export const getProductsInCart = (products) => {
  return products
    .filter(p => p.inCart > 0)
    .map(p => p.name)
    .join(', ');
};

export const getProductByName = (products, name) => {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
};
