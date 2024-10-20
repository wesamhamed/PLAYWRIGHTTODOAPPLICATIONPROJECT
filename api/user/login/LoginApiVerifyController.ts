import { APIResponse, expect } from "@playwright/test";
import { LoginResponseBody, RegisterRequestBody,Error } from "../../../models";
import { ErrorMessages } from "../../../data";

export class LoginApiVerifyController{

    private static _verify:LoginApiVerifyController;

    private constructor() {
    }


    public static getLoginApiVerifyController():LoginApiVerifyController {
        if (LoginApiVerifyController._verify == null) {
            LoginApiVerifyController._verify = new LoginApiVerifyController();
        }
        return LoginApiVerifyController._verify;
    }
   public statusCodeIsCorrect(loginResponse:APIResponse,status:number){
         expect(loginResponse.ok()).toBeTruthy();
         expect(loginResponse.status()).toBe(status);
        return LoginApiVerifyController.getLoginApiVerifyController(); 
    }
    public statusCodeIsInCorrect(loginResponse:APIResponse,status:number){
         expect( loginResponse.ok()).toBeFalsy();
         expect( loginResponse.status()).toBe(status);
        return LoginApiVerifyController.getLoginApiVerifyController(); 
    }
    public firstNameIsCorrect(loginResponseBody:LoginResponseBody,registerRequestBody:RegisterRequestBody    ) {
         expect(loginResponseBody).toHaveProperty("firstName",registerRequestBody.getFirstName());
        return LoginApiVerifyController.getLoginApiVerifyController();
    }
 
    public emailOrPasswordWrong(returnedError:Error) {
         expect(returnedError).toHaveProperty("message",ErrorMessages.EMAIL_AND_PASSWORD_NOT_CORRECT_LOGIN);
        return LoginApiVerifyController.getLoginApiVerifyController();
    }
    public accessTokenIsNotEmpty(loginResponseBody:LoginResponseBody){
        expect(loginResponseBody.access_token).not.toBeNull();
        return LoginApiVerifyController.getLoginApiVerifyController();
    }
}