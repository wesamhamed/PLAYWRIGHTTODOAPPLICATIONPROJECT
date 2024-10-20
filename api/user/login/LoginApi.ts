import { LoginApiActController } from "./LoginApiActController";
import { LoginApiGetController } from "./LoginApiGetController";
import { LoginApiVerifyController } from "./LoginApiVerifyController";

export class LoginApi{

  private static _loginApi:LoginApi;

    private _get:LoginApiGetController;
    private _act:LoginApiActController;
    private _verify:LoginApiVerifyController;
    
    public get():LoginApiGetController {
      return this._get;
  }

    public act():LoginApiActController {
      return this._act;
  }

  public verify():LoginApiVerifyController {
      return this._verify;
  }
  
  private constructor();
  private constructor(get:LoginApiGetController,  act:LoginApiActController,  verify:LoginApiVerifyController);
  private constructor(get?:LoginApiGetController,  act?:LoginApiActController,  verify?:LoginApiVerifyController) {
      this._get = get!;
      this._act = act!;
      this._verify = verify!;
  }
  public static getLoginApi() :LoginApi{
    if (LoginApi._loginApi == null) {
      LoginApi._loginApi = new LoginApi(LoginApiGetController.getLoginApiGetController(), LoginApiActController.getLoginApiActController(), LoginApiVerifyController.getLoginApiVerifyController());
    }
    return LoginApi._loginApi;
}

}