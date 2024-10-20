export class SeedApiVerifyController{

  private static _verify:SeedApiVerifyController;

  private constructor() {

  }

  public static getSeedApiVerifyController():SeedApiVerifyController {
      if (SeedApiVerifyController._verify == null) {
        SeedApiVerifyController._verify = new SeedApiVerifyController();
      }
      return SeedApiVerifyController._verify;
  }
}