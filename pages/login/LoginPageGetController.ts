import { Locator, Page } from "@playwright/test";

export class LoginPageGetController{
  
  private static _get:LoginPageGetController;

  private get emailInputSelector(){
    return "[data-testid='email']";
  }
  private get passwordInputSelector(){
    return "[data-testid='password']";
  }
  private get submitButtonSelector(){
    return "[data-testid='submit']";
  }
  private get errorMessageSelector(){
    return "[data-testid='error-alert'] div:last-child";
  }
  private constructor() {

  }

  public static getLoginPageGetController():LoginPageGetController {
      if (LoginPageGetController._get == null) {
          return new LoginPageGetController();
      }
      return LoginPageGetController._get ;
  }
  public getEmailInputLocator(page:Page){
    return page.locator(this.emailInputSelector);
  }
  public getPasswordInputSelector(page:Page){
    return page.locator(this.passwordInputSelector);
  }
  public getSubmitButtonSelector(page:Page){
    return page.locator(this.submitButtonSelector);
  }
  public getErrorMessageLocator(page:Page):Locator{
    return page.locator(this.errorMessageSelector);
  }
  public async getErrorMessageText(page:Page):Promise<string>{
    return await page.locator(this.errorMessageSelector).innerText();
  }
}