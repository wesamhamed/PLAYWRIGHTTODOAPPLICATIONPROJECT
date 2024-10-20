import { Page } from "@playwright/test";
import { LoginPageGetController } from "./LoginPageGetController";
import {TodoPageActController} from "../todo/TodoPageActController";

export class LoginPageActController{
  
  private static _act:LoginPageActController;


  private constructor() {
  }

  public static getLoginPageActController():LoginPageActController {
      if (LoginPageActController._act == null) {
        LoginPageActController._act = new LoginPageActController();
      }
      return LoginPageActController._act;
  }
  public async load(page:Page):Promise<LoginPageActController> {
    await page.goto("/login")
    return this;
  }
  public async login(page:Page,email:string, password:string):Promise<TodoPageActController> {
    await LoginPageGetController.getLoginPageGetController().getEmailInputLocator(page).clear();
    await LoginPageGetController.getLoginPageGetController().getEmailInputLocator(page).type(email);
    await LoginPageGetController.getLoginPageGetController().getPasswordInputSelector(page).clear();
    await LoginPageGetController.getLoginPageGetController().getPasswordInputSelector(page).type(password);
    await LoginPageGetController.getLoginPageGetController().getSubmitButtonSelector(page).click();
    await page.waitForURL("/todo");
    return TodoPageActController.getTodoPageActController();
  }
  public async loginIfPasswordIsNotCorrect(page:Page,email:string,password:string):Promise<LoginPageActController>{
    await LoginPageGetController.getLoginPageGetController().getEmailInputLocator(page).clear();
    await LoginPageGetController.getLoginPageGetController().getEmailInputLocator(page).type(email);
    await LoginPageGetController.getLoginPageGetController().getPasswordInputSelector(page).clear();
    await LoginPageGetController.getLoginPageGetController().getPasswordInputSelector(page).type(password);
    await LoginPageGetController.getLoginPageGetController().getSubmitButtonSelector(page).click();
    await LoginPageGetController.getLoginPageGetController().getErrorMessageLocator(page).waitFor({
      state:"visible",
      timeout:5000
    });
    return this;
  }
 
}