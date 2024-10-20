import { expect, Page } from "@playwright/test";
import { TodoPageGetController } from "./TodoPageGetController";

export class TodoPageVerifyController {

  private static _verify:TodoPageVerifyController;

  private constructor() {
  }


  public static  getTodoPageVerifyController():TodoPageVerifyController {
      if (TodoPageVerifyController._verify == null) {
        TodoPageVerifyController._verify = new TodoPageVerifyController();
      }
      return TodoPageVerifyController._verify;
  }
  public async welcomeIsDisplayed(page:Page) {
    await expect(TodoPageGetController.getTodoPageGetController().getWelcomeMessageLocator(page)).toBeVisible();
    return this;
}
public addedTodoTextIsCorrect(todoText:string, addedTodoText:string):TodoPageVerifyController  {
    expect(addedTodoText).toEqual(todoText);
    return this;
}
public async noTodoMessageIsDisplayed(page:Page) {
  await expect(TodoPageGetController.getTodoPageGetController().getNoTodoMessageLocator(page)).toBeVisible();
    return TodoPageVerifyController.getTodoPageVerifyController();
}
}