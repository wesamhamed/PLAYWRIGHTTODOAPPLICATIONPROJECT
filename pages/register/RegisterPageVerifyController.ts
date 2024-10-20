import { expect, Page } from "@playwright/test";
import { RegisterPageGetController } from "./RegisterPageGetController";
import { ErrorMessages } from "../../data";

export class RegisterPageVerifyController {
  
  private static _verify:RegisterPageVerifyController;

  private constructor() {

  }

  public static getRegisterPageVerifyController() {
      if (RegisterPageVerifyController._verify == null) {
        RegisterPageVerifyController._verify = new RegisterPageVerifyController();
      }
      return RegisterPageVerifyController._verify;
  }
  public async titleIsCorrect(page:Page,title:string){
    await expect(page).toHaveTitle(title);
    return RegisterPageVerifyController.getRegisterPageVerifyController();
  }
  public async pageIsCorrect(page:Page,url:string){
    await expect(page).toHaveURL(url);
    return RegisterPageVerifyController.getRegisterPageVerifyController();
  }
  public async errorMessageIsDisplayed(page:Page){
    await expect(RegisterPageGetController.getRegisterPageGetController().getErrorMessageLocator(page)).toBeVisible();
    return RegisterPageVerifyController.getRegisterPageVerifyController();
  }
  public async emailIsAlreadyRegistered(page:Page){
    expect(await RegisterPageGetController.getRegisterPageGetController().getErrorMessageText(page)).toEqual(ErrorMessages.EMAIL_IS_ALREADY_REGISTERED);
    return RegisterPageVerifyController.getRegisterPageVerifyController();
  }
}