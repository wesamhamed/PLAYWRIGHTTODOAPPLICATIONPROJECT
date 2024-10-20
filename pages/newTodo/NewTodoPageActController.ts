import { Page } from "@playwright/test";
import { NewTodoPageGetController } from "./NewTodoPageGetController";

export class NewTodoPageActController{

  private static _act:NewTodoPageActController;

    private constructor() {
    }


    public static getNewTodoPageActController():NewTodoPageActController {
        if (NewTodoPageActController._act == null) {
          NewTodoPageActController._act = new NewTodoPageActController();
        }
        return NewTodoPageActController._act;
    }

  public async load(page:Page):Promise<NewTodoPageActController>{
    await page.goto("/todo/new")
    return this;
  }
 
  public async addNewTodo(page:Page,item:string):Promise<NewTodoPageActController> {
    await NewTodoPageGetController.getNewTodoPageGetController().getNewTodoInputLocator(page).clear();
    await NewTodoPageGetController.getNewTodoPageGetController().getNewTodoInputLocator(page).type(item);
    await NewTodoPageGetController.getNewTodoPageGetController().getNewTodoButtonSelector(page).click();
    return this;
  }
}