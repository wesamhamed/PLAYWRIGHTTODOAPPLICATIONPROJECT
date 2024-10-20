import { NewTodoPageGetController } from "./NewTodoPageGetController";
import { NewTodoPageActController } from "./NewTodoPageActController";
import {NewTodoPageVerifyController} from "./NewTodoPageVerifyController";
export class NewTodoPage{
    
  private static _newTodoPage:NewTodoPage;

  private _act:NewTodoPageActController;
  private _verify:NewTodoPageVerifyController;
  private _get:NewTodoPageGetController;

  public  act():NewTodoPageActController {
      return this._act;
  }

  public verify():NewTodoPageVerifyController {
      return this._verify;
  }

  public get():NewTodoPageGetController {
      return this._get;
  }

  private constructor();
  private constructor( act:NewTodoPageActController,  verify:NewTodoPageVerifyController,  get:NewTodoPageGetController);
  private constructor( act?:NewTodoPageActController,  verify?:NewTodoPageVerifyController,  get?:NewTodoPageGetController) {
      this._act = act!;
      this._verify = verify!;
      this._get = get!;
  }

  public static getNewTodoPage():NewTodoPage {
      if (NewTodoPage._newTodoPage == null) {
        NewTodoPage._newTodoPage = new NewTodoPage(NewTodoPageActController.getNewTodoPageActController(), NewTodoPageVerifyController.getNewTodoPageVerifyController(), NewTodoPageGetController.getNewTodoPageGetController());
      }
      return NewTodoPage._newTodoPage;
  }
}