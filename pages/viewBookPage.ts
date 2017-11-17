import { PageObject } from "./page";

export class ViewBookPageObject extends PageObject {
  
  getAddBookButton() { return browser.element("button=Add Book to Collection"); }
  
  open() {
    super.open('#');
  }

  addBookToCollection() {
    this.getAddBookButton().click();
  }
  
}