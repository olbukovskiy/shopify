import DrawProducts from "./js/drawProductsGrid";
import FindProducts from "./js/findProducts";

const products = new FindProducts();

async function drawProductsSection() {
  await products.fetchProducts();

  new DrawProducts(".products", products.productsValues);
}

drawProductsSection();
