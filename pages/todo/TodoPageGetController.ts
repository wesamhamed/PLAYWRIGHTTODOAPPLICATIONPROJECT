import { Page } from '@playwright/test';
export class TodoPageGetController {

  private static _get:TodoPageGetController;

  private constructor() {
  }

  public static getTodoPageGetController():TodoPageGetController {
      if (TodoPageGetController._get == null) {
        TodoPageGetController._get = new TodoPageGetController();
      }
      return TodoPageGetController._get;
  }

  private get welcomeMessageSelector(){
    return "[data-testid='welcome']";
  }
  private get addButtonSelector(){
    return "[data-testid='add']";
  }
  private get todoItemSelector(){
    return "[data-testid='todo-item']";
  }
  private get firstTodoCheckboxSelector(){
    return "[data-testid='complete-task']:first-child";
  }
  private get deleteIconSelector(){
    return "[data-testid='delete']";
  }
  private get noTodoMessageSelector(){
    return "[data-testid='no-todos']";
  }
 

  public getWelcomeMessageLocator(page:Page) {
    return page.locator(this.welcomeMessageSelector);
   }
   public getAddButtonSelector(page:Page){
    return page.locator(this.addButtonSelector);
   }
   public async getTodoTextByIndex(page:Page,index:number){
     return await page.locator(this.todoItemSelector).nth(index).innerText();
   }
   public getFirstTodoCheckboxSelector(page:Page){
    return page.locator(this.firstTodoCheckboxSelector);
  }
  public getDeleteIconSelector(page:Page){
    return page.locator(this.deleteIconSelector);
  }
   public getNoTodoMessageLocator(page:Page){
     return page.locator(this.noTodoMessageSelector);
   }

}