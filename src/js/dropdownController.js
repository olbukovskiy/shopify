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

  show() {
    this.refs.dropdownItem.classList.remove("is-hidden");
  }

  hide() {
    this.refs.dropdownItem.classList.add("is-hidden");
  }
}
