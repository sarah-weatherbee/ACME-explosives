import axios from 'axios';


const loadProducts = type => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const allProducts = resp.data.products;
      const matchingProducts = allProducts.filter(product => product.type === type);
      resolve(matchingProducts);
    })
    .catch(err => reject(err));
});


const getProductsForEachType = types => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      const typesWithProducts = types.map((type) => {
        const newType = type;
        const matchingProducts = products.filter(product => product.type === type.id);
        matchingProducts.map((product) => {
          const newProduct = product;
          newProduct.categoryName = type.id;
          newProduct.typeName = type.name;
          return newProduct;
        });
        // TO DO: revise function to get products array with id, name desc, type name and catName
        // similar to gettypesforeachcategory fdunction in typesData.js
        newType.products = matchingProducts;

        return newType;
      });
      resolve(typesWithProducts);
    })
    .catch(err => reject(err));
});

export default { loadProducts, getProductsForEachType };
