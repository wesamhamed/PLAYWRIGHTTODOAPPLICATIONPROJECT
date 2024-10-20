import { HomePageActController } from "./HomePageActController";
import { HomePageGetController } from "./HomePageGetController";
import { HomePageVerifyController } from "./HomePageVerifyController";

export class HomePage {

  private static _homePage:HomePage;

  private _get:HomePageGetController;
  private _act:HomePageActController;
  private _verify:HomePageVerifyController;

  public act():HomePageActController {
      return this._act;
  }

  public verify():HomePageVerifyController {
      return this._verify;
  }

  public get():HomePageGetController {
      return this._get;
  }


  private constructor();
  private constructor( get:HomePageGetController,  act:HomePageActController,  verify:HomePageVerifyController);
  private constructor( get?:HomePageGetController,  act?:HomePageActController,  verify?:HomePageVerifyController) {
      this._get = get!;
      this._act = act!;
      this._verify = verify!;
  }

  public static getHomePage():HomePage {
      if (this._homePage == null) {
        this._homePage = new HomePage(HomePageGetController.getHomePageGetController(), HomePageActController.getHomePageActController(), HomePageVerifyController.getHomePageVerifyController());
      }
      return this._homePage;
  }

}