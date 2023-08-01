import {request,expect} from "@playwright/test";
import EndPoint from "../data/EndPoints";

export default class SeedAPI{

  public static async setupDatabase(){

    const requestContext = await request.newContext();

    const response = await requestContext.get(EndPoint.API_SEED_ENDPOINT);

    await expect(await response.ok()).toBeTruthy();
    await expect(await response.status()).toBe(200);

    return response;
  }

}