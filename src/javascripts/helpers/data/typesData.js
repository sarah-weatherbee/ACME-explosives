import axios from 'axios';

// the load fxn is the axios call that returns the promiss
const loadTypesForEachCategory = category => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const allTypes = resp.data.types;
      const matchingTypes = allTypes.filter(type => type.category === category.id);
      resolve(matchingTypes);
    })
    .catch(err => reject(err));
});

const getTypesForEachCategory = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = categories.map((category) => {
        const newCategory = category;
        const matchingTypes = types.filter(type => type.category === category.id);
        matchingTypes.map((type) => {
          const newType = type;
          newType.categoryName = category.name;
          return newType;
        });
        newCategory.types = matchingTypes;
        return newCategory;
      });
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});

export default { loadTypesForEachCategory, getTypesForEachCategory };
