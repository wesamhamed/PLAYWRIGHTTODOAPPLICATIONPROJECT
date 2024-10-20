import { APIResponse } from "@playwright/test";
import { LoginRequestBody, RegisterRequestBody,LoginResponseBody,Error } from "../../../models";

export class LoginApiGetController{
  
  private static _get:LoginApiGetController;

  private constructor() {
  }

  public static getLoginApiGetController():LoginApiGetController {
      if (LoginApiGetController._get == null) {
        LoginApiGetController._get = new LoginApiGetController();
      }
      return LoginApiGetController._get;
  }
  public loginRequestBody(registerRequestBody:RegisterRequestBody){
    return new LoginRequestBody(registerRequestBody.getEmail()
    ,registerRequestBody.getPassword());
  }
  public async loginResponseBody(loginResponse:APIResponse):Promise<LoginResponseBody> {
    return await loginResponse.json() as LoginResponseBody;
  }
  public async error(loginResponse:APIResponse) {
  return await loginResponse.json() as Error;
  }
}