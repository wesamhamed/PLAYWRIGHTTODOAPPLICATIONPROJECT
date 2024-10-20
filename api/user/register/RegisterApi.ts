import { RegisterApiActController } from "./RegisterApiActController";
import {RegisterApiGetController} from "./RegisterApiGetController";
import {RegisterApiVerifyController} from "./RegisterApiVerifyController";

export class RegisterApi{

  private static _registerApi:RegisterApi;

  private _get:RegisterApiGetController;
  private _act:RegisterApiActController;
  private _verify:RegisterApiVerifyController;


  public act():RegisterApiActController {
      return this._act;
  }

  public verify():RegisterApiVerifyController {
      return this._verify;
  }

  public get():RegisterApiGetController {
      return this._get;
  }

  private constructor();
  private constructor( get:RegisterApiGetController,  act:RegisterApiActController,  verify:RegisterApiVerifyController);
  private constructor( get?:RegisterApiGetController,  act?:RegisterApiActController,  verify?:RegisterApiVerifyController) {
      this._get = get!;
      this._act = act!;
      this._verify = verify!;
  }

  public static  getRegisterApi():RegisterApi {
      if (RegisterApi._registerApi == null) {
        RegisterApi._registerApi = new RegisterApi(RegisterApiGetController.getRegisterApiGetController(), RegisterApiActController.getRegisterApiActController(), RegisterApiVerifyController.getRegisterApiVerifyController());
      }
      return RegisterApi._registerApi;
  }


}