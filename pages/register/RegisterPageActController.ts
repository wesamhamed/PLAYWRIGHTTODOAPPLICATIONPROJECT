import { Page } from '@playwright/test';
import {RegisterRequestBody} from "../../models";
import { RegisterPageGetController } from './RegisterPageGetController';
import { TodoPageActController } from '../todo/TodoPageActController';

export class RegisterPageActController {

  private static _act:RegisterPageActController;

  private constructor() {
  }


  public static getRegisterPageActController():RegisterPageActController {
      if (RegisterPageActController._act == null) {
        RegisterPageActController._act = new RegisterPageActController();
      }
      return RegisterPageActController._act;
  }

  public async load(page:Page):Promise<RegisterPageActController>{
    await page.goto("/signup");
    await page.waitForURL("/signup");
    return this;
  }

  public async register(page:Page,registerRequest:RegisterRequestBody):Promise<TodoPageActController>{
    
    await RegisterPageGetController.getRegisterPageGetController().getFirstNameInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getFirstNameInputLocator(page).type(registerRequest.getFirstName());
   
    await  RegisterPageGetController.getRegisterPageGetController().getLastNameInputLocator(page).clear();
    await  RegisterPageGetController.getRegisterPageGetController().getLastNameInputLocator(page).type(registerRequest.getLastName());

    await  RegisterPageGetController.getRegisterPageGetController().getEmailInputLocator(page).clear();
    await  RegisterPageGetController.getRegisterPageGetController().getEmailInputLocator(page).type(registerRequest.getEmail());

    await RegisterPageGetController.getRegisterPageGetController().getPasswordInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getPasswordInputLocator(page).type(registerRequest.getPassword());

    await RegisterPageGetController.getRegisterPageGetController().getConfirmPasswordInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getConfirmPasswordInputLocator(page).type(registerRequest.getPassword());

    await RegisterPageGetController.getRegisterPageGetController().getSubmitButtonLocator(page).click();

    await page.waitForURL("/todo");

    return TodoPageActController.getTodoPageActController();
  }
  public async registerWithTheRegisteredEmail(page:Page,registerRequest:RegisterRequestBody):Promise<RegisterPageActController>{

    await RegisterPageGetController.getRegisterPageGetController().getFirstNameInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getFirstNameInputLocator(page).type(registerRequest.getFirstName());

    await RegisterPageGetController.getRegisterPageGetController().getLastNameInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getLastNameInputLocator(page).type(registerRequest.getLastName());

    await RegisterPageGetController.getRegisterPageGetController().getEmailInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getEmailInputLocator(page).type(registerRequest.getEmail());

    await RegisterPageGetController.getRegisterPageGetController().getPasswordInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getPasswordInputLocator(page).type(registerRequest.getPassword());

    await RegisterPageGetController.getRegisterPageGetController().getConfirmPasswordInputLocator(page).clear();
    await RegisterPageGetController.getRegisterPageGetController().getConfirmPasswordInputLocator(page).type(registerRequest.getPassword());

    await RegisterPageGetController.getRegisterPageGetController().getSubmitButtonLocator(page).click();

    await RegisterPageGetController.getRegisterPageGetController().getErrorMessageLocator(page).waitFor({
      state:"visible",
      timeout:10000
    });

    
    return this;
  }
}