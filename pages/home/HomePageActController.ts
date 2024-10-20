import { Page } from "@playwright/test";
import { EndPoint } from "../../data";

export class HomePageActController {

  private static _act:HomePageActController;

  public constructor() {
  }


  public static getHomePageActController():HomePageActController {
      if (this._act == null) {
        this._act = new HomePageActController();
      }
      return this._act ;
  }

  public async load(page:Page):Promise<HomePageActController> {
      await page.goto(EndPoint.HOME_PAGE_ENDPOINT)
      return this;
  }

}