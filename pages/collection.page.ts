import { PageObject } from "./page";
import { expect } from "chai";

export class CollectionPageObject extends PageObject {
  
  getPage()          { return browser.element('bc-collection-page'); }
  getAddBookButton() { return browser.element("button=Add Book to Collection"); }
  
  open() {
    super.open('#/books');
  }

  // Not a good assertion. Just for testing.
  assertBookInCollection(bookName: string) {
    let bookNames = browser.getText('bc-book-preview-list');
    expect(bookNames).to.contain(bookName);
  }
  
}
