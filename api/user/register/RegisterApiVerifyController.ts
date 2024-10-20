import { APIResponse, expect } from "@playwright/test";
import { RegisterRequestBody, RegisterResponseBody,Error } from "../../../models";
import { ErrorMessages } from "../../../data";

export class RegisterApiVerifyController{
  private static _verify:RegisterApiVerifyController;

  private constructor() {
  }

  public static getRegisterApiVerifyController():RegisterApiVerifyController {
      if (RegisterApiVerifyController._verify == null) {
        RegisterApiVerifyController._verify = new RegisterApiVerifyController();
      }
      return RegisterApiVerifyController._verify;
  }
  public statusCodeIsCorrect(response:APIResponse, statusCode:number) {
     expect(response.status()).toBe(statusCode);
    return this;
}
public firstNameIsCorrect(registerRequestBody:RegisterRequestBody, registerResponseBody:RegisterResponseBody) {
   expect(registerResponseBody).toHaveProperty("firstName",registerRequestBody.getFirstName());
  return this;
}
public emailIsAlreadyRegistered(returnedError:Error) {
  expect(returnedError).toHaveProperty("message",ErrorMessages.EMAIL_IS_ALREADY_REGISTERED);
  return this;
}

}