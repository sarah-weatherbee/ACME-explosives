import util from '../../helpers/util';

const domStringBuilder = (products) => {
  let domString = '';
  products.forEach((product) => {
    product.products.forEach((prod) => {
      domString += `<div id=${prod.id} class="mt-2 mb-2 card category col-3">`;
      domString += `<h3 class="card-text">${prod.name}</h4>`;
      domString += '<div class="card-body">';
      domString += `<h5 class="card-text">${prod.description}</h5>`;
      domString += `<h5 class="card-text">Category: ${product.categoryName}</h5>`;
      domString += `<h5 class="card-text">Type: ${prod.typeName}</h5>`;
      domString += '</div>';
      domString += '</div>';
    });
  });
  util.printToDom('product-cards', domString);
};

export default { domStringBuilder };
