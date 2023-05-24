import FindProducts from "./src/js/findProducts";
import DrawProducts from "./src/js/drawProductsGrid";
import DropdownController from "./src/js/dropdownController";

const refs = { menu: document.querySelector(".menu-wrapper") };

const products = new FindProducts();
const dropdown = new DropdownController(".menu", true);

(async function drawProductsSection() {
  await products.fetchProducts();

  new DrawProducts(".products-wrapper", products.productsValues);
})();

const clickHandler = () => {
  dropdown.toggle();
};

refs.menu.addEventListener("click", clickHandler);
