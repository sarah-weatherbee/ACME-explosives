import util from '../../helpers/util';

const domStringBuilder = (products) => {
  let domString = '';
  // categories.types.forEach((type) => {
  //   console.error('2222', type);
  products.forEach((product) => {
    product.products.forEach((prod) => {
      console.error('3333', prod);
      domString += `<div id=${prod.id} class category col-4>`;
      domString += `<h3 class="card-header">${product.categoryName}</h3>`;
      domString += `<h4 class="card-header">${prod.typeName}</h4>`;
      domString += `<h4 class="card-header">${prod.name}</h4>`;
      domString += `<h4 class="card-header">${prod.description}</h4>`;
      domString += '</div>';
    });
  });
  util.printToDom('product-cards', domString);
};

export default { domStringBuilder };
