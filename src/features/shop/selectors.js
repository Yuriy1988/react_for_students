const getSortedProducts = (products, sortByValue) => {
  if (!sortByValue) {
    return products;
  }

  return [...products].sort((a, b) => a[sortByValue] > b[sortByValue] ? 1 : - 1);
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
