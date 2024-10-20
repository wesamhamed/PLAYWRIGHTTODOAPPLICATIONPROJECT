import test from "@playwright/test";
import { RegisterApi } from "../../../../api";

test.describe("Register API test cases",()=>{

  const registerApi = RegisterApi.getRegisterApi();

  test("Should Be Able To Register",async({request})=>{

    const registerRequestBody = registerApi.get()
                .generateUser();

     const response = await registerApi.act()
                .register(request,registerRequestBody);

    const registerResponseBody = await registerApi.get()
                .registerResponseBody(response);

    registerApi.verify()
                .statusCodeIsCorrect(response, 201) 
                .firstNameIsCorrect(registerRequestBody, registerResponseBody);
  });

  test("Should Not Be Able To Register With The Same Email",async({request})=>{

    const registerRequestBody = registerApi.get()
      .generateUser();

     await registerApi.act()
      .register(request,registerRequestBody);
    
    const response = await registerApi.act()
      .register(request,registerRequestBody);

    const returnedError = await registerApi.get()
                .error(response);

    registerApi.verify()
                .statusCodeIsCorrect(response, 400)    
                .emailIsAlreadyRegistered(returnedError);
  
  });
});
