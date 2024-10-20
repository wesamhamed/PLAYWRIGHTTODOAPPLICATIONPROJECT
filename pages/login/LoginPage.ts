import { LoginPageGetController } from "./LoginPageGetController";
import {LoginPageActController} from "./LoginPageActController";
import {LoginPageVerifyController} from "./LoginPageVerifyController";

export class LoginPage{

  private static _loginPage:LoginPage;

  private _get:LoginPageGetController;
  private _act:LoginPageActController;
  private _verify:LoginPageVerifyController;

  public act():LoginPageActController {
      return this._act;
  }

  public verify():LoginPageVerifyController {
      return this._verify;
  }

  public get():LoginPageGetController {
      return this._get;
  }

  // Constructor
  private constructor();
  private constructor( get:LoginPageGetController,  act:LoginPageActController,  verify:LoginPageVerifyController);
  private constructor( get?:LoginPageGetController,  act?:LoginPageActController,  verify?:LoginPageVerifyController) {
      this._get = get!;
      this._act = act!;
      this._verify = verify!;
  }

  public static getLoginPage():LoginPage {
      if (LoginPage._loginPage == null) {
        LoginPage._loginPage  = new LoginPage(LoginPageGetController.getLoginPageGetController(), LoginPageActController.getLoginPageActController(), LoginPageVerifyController.getLoginPageVerifyController());
      }
      return LoginPage._loginPage ;
  }

}