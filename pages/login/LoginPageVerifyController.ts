import { expect, Page } from "@playwright/test";
import { LoginPageGetController } from "./LoginPageGetController";
import { ErrorMessages } from "../../data";

export class LoginPageVerifyController {

  private static _verify:LoginPageVerifyController;

  private constructor() {

  }

  public static getLoginPageVerifyController():LoginPageVerifyController {
      if (LoginPageVerifyController._verify == null) {
          return new LoginPageVerifyController();
      }
      return LoginPageVerifyController._verify;
  }
  public async titleIsCorrect(page:Page,title:string) {
    await expect(page).toHaveTitle(title);

  }
  public async pageIsCorrect(page:Page,url:string){
    await expect(page).toHaveURL(url);
    return LoginPageVerifyController.getLoginPageVerifyController();
  }
  public async errorMessageIsDisplayed(page:Page) {
    await expect(LoginPageGetController.getLoginPageGetController().getErrorMessageLocator(page)).toBeVisible();
    return this;
}
public async emailAndPasswordNotCorrectLogin(page:Page) {
  await expect(await LoginPageGetController.getLoginPageGetController().getErrorMessageText(page)).toBe(ErrorMessages.EMAIL_AND_PASSWORD_NOT_CORRECT_LOGIN);
  return this;
}

}