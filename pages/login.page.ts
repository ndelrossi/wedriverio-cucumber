import { PageObject } from "./page";

export class LoginPageObject extends PageObject {

  getUsernameBox() { return browser.element("input[formcontrolname='username'"); }
  getPasswordBox() { return browser.element("input[formcontrolname='password']"); }
  getLoginButton() { return browser.element("button[type='submit']"); }

  open() {
    super.open('#/login');
  }

  submit() {
    this.getLoginButton().click();
  }

  setUsername(name: string) {
    this.getUsernameBox().setValue(name);
  }

  setPassword(password: string) {
    this.getPasswordBox().setValue(password);
  }

}