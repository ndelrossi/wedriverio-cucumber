import { CollectionPageObject } from "../pages/collection.page";
import { BrowsePageObject } from "../pages/browse.page";
import { ViewBookPageObject } from "../pages/view-book.page";
import { expect } from "chai";
const { Given, When, Then } = require("cucumber");

const CollectionPage: CollectionPageObject = new CollectionPageObject();
const BrowsePage:     BrowsePageObject = new BrowsePageObject();
const ViewBookPage:   ViewBookPageObject = new ViewBookPageObject();

When(/^I browse for the book "(.*)"$/, (bookName) => {
  BrowsePage.open();
  BrowsePage.searchBook(bookName);
});

When(/^I select the first result$/, () => {
  BrowsePage.selectFirstBook();
});

When(/^I add the book to my collection$/, () => {
  ViewBookPage.addBookToCollection();
});

Then(/^I will see "(.*)" in my collection$/, (bookName) => {
  CollectionPage.open();
  CollectionPage.assertBookInCollection(bookName);
});

Then(/^I will see the My Collection page$/, () => {
  CollectionPage.getPage().isExisting();
});
