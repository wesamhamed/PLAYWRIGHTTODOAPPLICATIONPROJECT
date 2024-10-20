export class HomePageVerifyController {

  private static _verify:HomePageVerifyController;

  private constructor() {

  }

  public static getHomePageVerifyController():HomePageVerifyController {
      if (this._verify == null) {
        this._verify = new HomePageVerifyController();
      }
      return this._verify;
  }

}