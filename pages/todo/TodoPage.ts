import { TodoPageActController } from "./TodoPageActController";
import { TodoPageGetController } from "./TodoPageGetController";
import {TodoPageVerifyController} from "./TodoPageVerifyController";

export class TodoPage{

  private static _todoPage:TodoPage;

  private _get:TodoPageGetController;
  private _act:TodoPageActController;
  private _verify:TodoPageVerifyController;

  public act():TodoPageActController {
      return this._act;
  }

  public verify():TodoPageVerifyController {
      return this._verify;
  }

  public get():TodoPageGetController {
      return this._get;
  }

  private constructor();
  private constructor( get:TodoPageGetController,  act:TodoPageActController,  verify:TodoPageVerifyController)
  private constructor( get?:TodoPageGetController,  act?:TodoPageActController,  verify?:TodoPageVerifyController) {
      this._act = act!;
      this._verify = verify!;
      this._get = get!;
  }

  public static getTodoPage():TodoPage {
      if (TodoPage._todoPage == null) {
        TodoPage._todoPage = new TodoPage(TodoPageGetController.getTodoPageGetController(), TodoPageActController.getTodoPageActController(), TodoPageVerifyController.getTodoPageVerifyController());
      }
      return TodoPage._todoPage;
  }

}