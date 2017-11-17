import * as webdriverio from "webdriverio";
import { LoginPageObject } from "../pages/login.page";
import { expect } from "chai";

const { Given, When, Then } = require("cucumber");

const LoginPage: LoginPageObject = new LoginPageObject();

Given(/^I visit the homepage$/, () => {
  LoginPage.open();
});

When(/^I login with my credentials$/, () => {
  LoginPage.setUsername('test')
  LoginPage.setPassword('test');
  LoginPage.submit();
});
