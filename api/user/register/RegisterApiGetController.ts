import { faker } from "@faker-js/faker";
import { Error, RegisterRequestBody, RegisterResponseBody } from "../../../models";
import { APIResponse } from "@playwright/test";

export class RegisterApiGetController{

  private static _get:RegisterApiGetController;


  private constructor() {
  }

  public static getRegisterApiGetController():RegisterApiGetController {
      if (RegisterApiGetController._get == null) {
        RegisterApiGetController._get = new RegisterApiGetController();
      }
      return RegisterApiGetController._get ;
  }

  public generateUser(){
    return new RegisterRequestBody(faker.person.firstName(),
                                          faker.person.lastName(),
                                          faker.internet.email(),
                                          "Test1234");
}
public async registerResponseBody(response:APIResponse):Promise<RegisterResponseBody> {
  return await response.json() as RegisterResponseBody;
}
  
public async error( response:APIResponse) {
  return await response.json() as Error;
}
}