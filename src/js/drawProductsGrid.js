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

    return `<ul class="grid ss:grid-cols-productsS sm:grid-cols-productsSM md:grid-cols-productsM xl:grid-cols-productsXL  auto-rows-1fr w-full gap-x-6 gap-y-12 my-auto mx-auto">
      ${products
        .map(({ title, price, image }) => {
          return this.createSingleProductMarkup(title, price, image);
        })
        .join("")}</ul>`;
  }

  createSingleProductMarkup(title, price, image) {
    return `<li class="h-97 rounded hover:scale-105 transition-transform cursor-pointer">
              <div class="relative pb-98 w-full rounded overflow-hidden border border-black mb-3">
                <img
                  src="${image}"
                  alt="product"
                  class="w-full h-full absolute top-0 left-0 object-cover"
                />
                <p class="flex justify-center items-center absolute top-3 left-3 rounded border-none bg-black text-body font-normal text-xs h-6 w-12">
                  USED
                </p>
              </div>
              <div class="flex flex-col">
                <div class="flex justify-between items-center mb-3">
                  <div class="products-item__content-wrapper">
                    <h3>${title}</h3>
                    <p>${price} KR.</p>
                  </div>
                  <div class="self-end text-right w-21">
                    <h3 class="font-medium">Condition</h3>
                    <p class="font-normal">Slightly used</p>
                  </div>
                </div>
                <button
                  class="w-full h-10.5 bg-black text-white rounded border-none uppercase"
                >
                  PICK-UP IN <span class="underline">${price}</span>
                </button>
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
