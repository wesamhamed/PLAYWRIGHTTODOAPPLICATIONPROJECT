export class HomePageGetController {

  private static _get:HomePageGetController;

  private constructor() {

  }

  public static getHomePageGetController():HomePageGetController {
      if (HomePageGetController._get == null) {
        this._get = new HomePageGetController();
      }
      return HomePageGetController._get;
  }

}
