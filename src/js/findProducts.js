import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import selectLowestPrice from "./selectLowestPrice";
import spinnerControls from "./spinnerControls";

const BASE_URL = "https://voodoo-sandbox.myshopify.com";
let controller;

export default class FindProducts {
  #products;
  #error;

  constructor() {
    this.products = [];
    this.error = null;
  }

  async fetchProducts() {
    spinnerControls.showSpinner();
    this.errorValue = null;
    if (controller) controller.abort();

    try {
      controller = new AbortController();

      const url = `${BASE_URL}/products.json?limit=12`;
      const response = await axios.get(url, {
        signal: controller.signal,
      });

      const responseData = await response.data.products.map((product) => {
        return {
          title: product.title,
          price: selectLowestPrice(product.variants),
          image: product?.images[0]?.src ?? "https://placehold.co/400x400",
        };
      });

      this.productsValues = responseData;
      this.errorValue = null;
      spinnerControls.hideSpinner();
    } catch (error) {
      this.errorValue = error;
      spinnerControls.hideSpinner();
      Notify.failure("Whoops! Sorry, we have a problem!");
    }
  }

  get errorValue() {
    return this.error;
  }

  set errorValue(value) {
    this.error = value;
  }

  get productsValues() {
    return this.products;
  }

  set productsValues(value) {
    this.products = value;
  }
}
