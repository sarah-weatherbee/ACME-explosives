import axios from 'axios';

// the loadCategories fxn is the axios call that returns the promiss
const loadCategories = () => axios.get('../db/categories.json');

export default { loadCategories };
