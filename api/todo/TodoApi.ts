import { TodoApiGetController } from './TodoApiGetController';
import { TodoApiActController } from './TodoApiActController';
import { TodoApiVerifyController } from './TodoApiVerifyController';

export class TodoApi{

  private static _todoApi:TodoApi;

    private _get:TodoApiGetController;
    private _act:TodoApiActController;
    private _verify:TodoApiVerifyController;

    public get(){
      return this._get;
    }
    public act(){
      return this._act;
    }
    public verify(){
      return this._verify;
    }

  private constructor();
  private constructor( get:TodoApiGetController,  act:TodoApiActController,  verify:TodoApiVerifyController);
  private constructor( get?:TodoApiGetController,  act?:TodoApiActController,  verify?:TodoApiVerifyController){
    this._get = get!;
    this._act = act!;
    this._verify = verify!;
}


public static getTodoApi():TodoApi {
  if (TodoApi._todoApi == null) {
      TodoApi._todoApi  = new TodoApi(TodoApiGetController.getTodoApiGetController(), TodoApiActController.getTodoApiActController(), TodoApiVerifyController.getTodoApiVerifyController());
  }
  return TodoApi._todoApi;
}


}