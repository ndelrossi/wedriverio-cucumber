import * as webdriverio from "webdriverio";
const { BeforeAll, After, Status } = require("cucumber");

After(function(scenario) {
  browser.url('/logout');
});
