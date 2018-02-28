const productsDb = {
  products: [
    {
      id: 1,
      name: 'BMW',
      price: 12000,
      inCart: 0,
      shopsIds: [11, 12],
    }, {
      id: 2,
      name: 'Lada',
      price: 200,
      inCart: 0,
      shopsIds: [11, 15],
    }, {
      id: 3,
      name: 'Mercedes',
      price: 20000,
      inCart: 0,
      shopsIds: [14],
    }, {
      id: 4,
      name: 'Audi',
      price: 15000,
      inCart: 0,
      shopsIds: [13, 15],
    },
  ],
  shops: [
    {
      id: 11,
      name: 'SuperShop',
    },
    {
      id: 12,
      name: 'BMW Official',
    },
    {
      id: 13,
      name: 'Audi Official',
    },
    {
      id: 14,
      name: 'Mercedes Official',
    },
    {
      id: 15,
      name: 'COOL SHOP LTD',
    },
  ],
};


export default productsDb;
