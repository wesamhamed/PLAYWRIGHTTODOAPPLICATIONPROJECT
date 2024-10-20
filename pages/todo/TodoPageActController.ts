import { NewTodoPageActController } from './../newTodo/NewTodoPageActController';
import { Page } from '@playwright/test';
import { TodoPageGetController } from './TodoPageGetController';
export class TodoPageActController {

  private static _act:TodoPageActController;

  private constructor() {
  }


  public static  getTodoPageActController():TodoPageActController {
      if (TodoPageActController._act == null) {
        TodoPageActController._act = new TodoPageActController();
      }
      return TodoPageActController._act;
  }
  public async load(page:Page):Promise<TodoPageActController> {
    await page.goto("/todo");
    return this;
  }
  public async clickOnPlusButton(page:Page):Promise<NewTodoPageActController> {
    await TodoPageGetController.getTodoPageGetController().getAddButtonSelector(page).click();
    return NewTodoPageActController.getNewTodoPageActController();
  }
  public async deleteTodoByIndex(page:Page,index:number):Promise<TodoPageActController>{
    await TodoPageGetController.getTodoPageGetController().getDeleteIconSelector(page).nth(index).click();
    return this;
  }
}