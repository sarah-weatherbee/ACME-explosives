import categoriesData from '../../helpers/data/categoriesData';
import typesData from '../../helpers/data/typesData';
import productsData from '../../helpers/data/productsData';
import print from '../types/productDomString';

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typesData.getTypesForEachCategory(resp.data.categories))
    .then((categoriesWithTypes) => {
      console.error(categoriesWithTypes);
      let allTypes = [];
      categoriesWithTypes.forEach((category) => {
        allTypes = [...allTypes, ...category.types];
      });
      console.error(allTypes);
      return productsData.getProductsForEachType(allTypes);
    })
    .then((products) => {
      console.error('1111', products);
      print.domStringBuilder(products);
    })
    .catch(err => console.error('error from loadCategories', err));
};

export default { initCategories };
