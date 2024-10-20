import { Page } from "@playwright/test";

export class RegisterPageGetController {

  private static _get:RegisterPageGetController;

  private get firstNameInputSelector(){
    return "[data-testid='first-name']";
  }
  private get lastNameInputSelector(){
    return "[data-testid='last-name']";
  }
  private get emailInputSelector(){
    return "[data-testid='email']";
  }
  private get passwordInputSelector(){
    return "[data-testid='password']";
  }
  private get confirmPasswordInputSelector(){
    return "[data-testid='confirm-password']";
  }
  private get submitButtonSelector(){
    return "[data-testid='submit']";
  }

  private get errorMessageSelector(){
    return "[data-testid='error'] div:last-child";
  }

  public getFirstNameInputLocator(page:Page){
    return page.locator(this.firstNameInputSelector);
  }
  public getLastNameInputLocator(page:Page){
    return page.locator(this.lastNameInputSelector);
  }
  public getEmailInputLocator(page:Page){
    return  page.locator(this.emailInputSelector);
  }
  public getPasswordInputLocator(page:Page){
    return  page.locator(this.passwordInputSelector);
  }
  public getConfirmPasswordInputLocator(page:Page){
    return  page.locator(this.confirmPasswordInputSelector);
  }
  public getSubmitButtonLocator(page:Page){
    return page.locator(this.submitButtonSelector);
  }

  public getErrorMessageLocator(page:Page){
    return  page.locator(this.errorMessageSelector);
  } 
  public async getErrorMessageText(page:Page){
    return await page.locator(this.errorMessageSelector).innerText();
  } 

  private constructor() {

  }

  public static getRegisterPageGetController():RegisterPageGetController {

      if (RegisterPageGetController._get == null) {
        RegisterPageGetController._get = new RegisterPageGetController();
      }
      return RegisterPageGetController._get;
      
  }


}