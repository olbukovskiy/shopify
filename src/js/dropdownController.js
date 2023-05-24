export default class DropdownController {
  constructor(selector, hidden = false) {
    this.refs = this.getRefs(selector);
    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.dropdownItem = document.querySelector(selector);
    return refs;
  }

  toggle() {
    this.refs.dropdownItem.classList.toggle("h-0");
    this.refs.dropdownItem.classList.toggle("p-6");
  }

  hide() {
    this.refs.dropdownItem.classList.add("h-0");
    this.refs.dropdownItem.classList.remove("p-6");
  }
}
