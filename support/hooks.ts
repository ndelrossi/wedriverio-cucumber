import * as webdriverio from "webdriverio";
const { After } = require("cucumber");

After(function(scenario) {
  browser.url('/logout');
});
