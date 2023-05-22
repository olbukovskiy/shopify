export default class DrawProducts {
  constructor(selector, products) {
    this.refs = this.getRefs(selector);

    this.refs.wrapper.insertAdjacentHTML(
      "beforeend",
      this.createProductsMarkup(products)
    );
  }

  getRefs(selector) {
    const refs = {};
    refs.wrapper = document.querySelector(selector);
    return refs;
  }

  createProductsMarkup(products) {
    if (!products || products.length === 0) {
      return "<div><h2>Sorry, we don't have anything to offer you yet</h2></div>";
    }

    return `<ul class="products-list">
      ${products
        .map(({ title, price, image }) => {
          return this.createSingleProductMarkup(title, price, image);
        })
        .join("")}</ul>`;
  }

  createSingleProductMarkup(title, price, image) {
    return `<li class="products-item">
     <div class="products-item__image-wrapper">
       <img src="${image}" alt="product" class="roducts-item__image" />
       <p class="roducts-item__label">USED</p>
     </div>
     <div class="products-item__content">
       <div class="products-item__content-wrapper">
         <h3 class="products-item__title">${title}</h3>
         <p class="products-item__price">${price} KR.</p>
       </div>
       <div class="products-item__condition">
         <h3 class="products-item__condition-title">Condition</h3>
         <p class="products-item__condition-value">Slightly used</p>
       </div>
     </div>
   </li>`;
  }

  get productsMarkup() {
    return this.products;
  }

  set productsMarkup(data) {
    this.products = data;
  }
}
