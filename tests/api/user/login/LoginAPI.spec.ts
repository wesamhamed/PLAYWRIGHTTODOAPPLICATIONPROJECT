import { test } from '@playwright/test';
import { LoginApi, RegisterApi } from '../../../../api';


test.describe("Login API test cases",()=>{

  const registerApi = RegisterApi.getRegisterApi();
  const loginApi = LoginApi.getLoginApi();

 test("Should be able to login using the API",async({request})=>{

        const registerRequestBody = registerApi.get()
        .generateUser();

        await registerApi.act()
        .register(request,registerRequestBody);

        const loginRequestBody = loginApi.get()
        .loginRequestBody(registerRequestBody);

        const loginResponse = await loginApi.act()
                .login(request,loginRequestBody);

        const loginResponseBody = await loginApi.get()
                .loginResponseBody(loginResponse);

        loginApi.verify()
                .statusCodeIsCorrect(loginResponse, 200)
                .firstNameIsCorrect(loginResponseBody, registerRequestBody)
                .accessTokenIsNotEmpty(loginResponseBody);

  });
  test("Should Not Be Able To Login If Password Is Not Correct",async({request})=>{

    const registerRequestBody = registerApi.get()
                .generateUser();

     await registerApi.act()
                .register(request,registerRequestBody);

     registerRequestBody.setPassword("wrongPassword");

   const loginRequestBody = loginApi.get()
                         .loginRequestBody(registerRequestBody);

    const loginResponse = await loginApi.act()
                .login(request,loginRequestBody);

    const returnedError = await loginApi.get()
                .error(loginResponse);

 loginApi
                .verify()
                .statusCodeIsInCorrect(loginResponse, 401)
                .emailOrPasswordWrong(returnedError);

 });

});

