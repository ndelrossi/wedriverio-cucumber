import { PageObject } from "./page";

export class BrowsePageObject extends PageObject {
  
  getSearchBox() { return browser.element("bc-book-search input[placeholder='Search for a book']"); }
  
  open() {
    super.open('#/books/find');
  }

  waitForResults() {
    browser.waitForExist('bc-book-preview');
  }
  
  getFirstBookTitle() {
    return browser.element('bc-book-preview').getText();
  }

  searchBook(bookName: string) {
    return this.getSearchBox().setValue(bookName);
  }

  selectFirstBook() {
    this.waitForResults();
    browser.element('bc-book-preview').click();
  }
  
}