export class SeedApiGetController{

  private static _get:SeedApiGetController;

  private constructor() {
  }

  public static getSeedApiGetController():SeedApiGetController {
      if (SeedApiGetController._get == null) {
        SeedApiGetController._get = new SeedApiGetController();
      }
      return SeedApiGetController._get;
  }
}