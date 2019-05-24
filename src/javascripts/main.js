import '../styles/main.scss';
import 'bootstrap';
import categories from './components/categories/categories';
import products from './components/products/products';
import types from './components/types/productDomString';

console.error('hi');

const init = () => {
  categories.initCategories();
  types.initTypes();
  products.initProducts();
};

init();
