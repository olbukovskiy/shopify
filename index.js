import DrawProducts from "./src/js/drawProductsGrid";
import FindProducts from "./src/js/findProducts";

const products = new FindProducts();

async function drawProductsSection() {
  await products.fetchProducts();

  new DrawProducts(".products", products.productsValues);
}

drawProductsSection();
