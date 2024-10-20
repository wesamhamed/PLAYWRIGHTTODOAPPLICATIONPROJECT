import { Page } from '@playwright/test';
export class NewTodoPageGetController{

  private static _get:NewTodoPageGetController;


  private get newTodoInputSelector(){
    return "[data-testid='new-todo']";
  }
  private get newTodoButtonSelector(){
    return "[data-testid='submit-newTask']";
  }
  private constructor() {

  }

  public static getNewTodoPageGetController():NewTodoPageGetController {
      if (NewTodoPageGetController._get == null) {
        NewTodoPageGetController._get = new NewTodoPageGetController();
      }
      return NewTodoPageGetController._get;
  }
  public getNewTodoInputLocator(page:Page){
    return page.locator(this.newTodoInputSelector);
  }
  public getNewTodoButtonSelector(page:Page){
    return page.locator(this.newTodoButtonSelector);
  }
}