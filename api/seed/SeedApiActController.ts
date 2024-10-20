import {expect, APIRequest} from "@playwright/test";
import {EndPoint} from "../../data";

export class SeedApiActController{

  private static _act:SeedApiActController;

  private constructor() {
  }


  public static getSeedApiActController():SeedApiActController {
      if (SeedApiActController._act == null) {
        SeedApiActController._act = new SeedApiActController();
      }
      return SeedApiActController._act;
  }
  
  public static async setupDatabase(request:APIRequest){

    const requestContext = await request.newContext();

    const response = await requestContext.get(EndPoint.API_SEED_ENDPOINT);

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    return response;
  }


}