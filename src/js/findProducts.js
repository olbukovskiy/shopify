import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import selectLowestPrice from "./selectLowestPrice";

const BASE_URL = "https://voodoo-sandbox.myshopify.com";
let controller;

export default class FindProducts {
  constructor() {
    this.products = [];
    this.error = null;
  }

  async fetchProducts() {
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
      console.log(responseData);
      this.productsValues = responseData;
    } catch (error) {
      this.errorValue = error;
      console.log(this.errorValue);
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
