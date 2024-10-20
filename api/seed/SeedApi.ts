import {SeedApiActController} from "./SeedApiActController";
import {SeedApiGetController} from "./SeedApiGetController";
import {SeedApiVerifyController} from "./SeedApiVerifyController";


export class SeedApi{

  private static _seedApi:SeedApi ;

  private _get:SeedApiGetController;
  private _act:SeedApiActController;
  private _verify:SeedApiVerifyController;

  public get get() {
    return this._get;
}

  public get act() {
      return this._act;
  }


  public get verify() {
      return this._verify;
  }

  private constructor();
  private constructor(get:SeedApiGetController,act:SeedApiActController,verify:SeedApiVerifyController);
  private constructor(get?:SeedApiGetController,act?:SeedApiActController,verify?:SeedApiVerifyController) {
      this._get = get!;
      this._act = act!;
      this._verify = verify!;
  }

  public static getSeedAPi() {
      if (SeedApi._seedApi == null) {
        SeedApi._seedApi = new SeedApi(SeedApiGetController.getSeedApiGetController(), SeedApiActController.getSeedApiActController(), SeedApiVerifyController.getSeedApiVerifyController());
      }
      return SeedApi._seedApi;
  }

}