import productsData from '../../helpers/data/productsData';
import categoriesData from '../../helpers/data/categoriesData';
import typesData from '../../helpers/data/typesData';
import util from '../../helpers/util';

const writeProducts = (products) => {
  let domString = '';
  products.forEach((product) => {
    domString += `<div id=${product.id} class category col-3>`;
    domString += `<h3 class="card-header">${product.type}"</h3>`;
    domString += `<h4 class="card-header">${product.name}"</h4>`;
    domString += `<h4 class="card-header">${product.description}"</h4>`;
    domString += '</div>';
  });
  util.printToDom('product-cards', domString);
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typesData.typesForEachCategory(resp.data.categories))
    .then((categoriesWithTypes) => {
      console.error(categoriesWithTypes);
    })
    .catch(err => console.error('error from initCategories', err));
};
const initTypes = (product) => {
  typesData.loadTypes(product)
    .then(resp => productsData.productsForEachType(resp.data.types))
    .then((typesWithProducts) => {
      console.error(typesWithProducts);
    })
    .catch(err => console.error('error from initTypes', err));
};

const initProducts = (types) => {
  productsData.loadProducts(types)
    .then((products) => {
      console.error('all products', products);
      writeProducts(products);
    })
    .catch(err => console.error('error from loadProducts', err));
};

export default { initCategories, initTypes, initProducts };
