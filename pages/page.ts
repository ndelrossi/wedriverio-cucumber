import * as webdriverio from "webdriverio";

export class PageObject {

  open(path) {
    browser.url(path);
  }

}
