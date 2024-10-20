import { test } from '@playwright/test';
import { RegisterApi } from '../../../../api';
import { TodoPage,RegisterPage } from '../../../../pages';

test.describe("Register test cases",()=>{

  const registerApi = RegisterApi.getRegisterApi();
  const registerPage = RegisterPage.getRegisterPage();
  const todoPage = TodoPage.getTodoPage();

  test("Should be able to open the register page",async({page})=>{

    await registerPage.act()
                        .load(page);

    await registerPage.verify()
                          .titleIsCorrect(page,"QAcart Todo App - Signup page");

    await registerPage.verify()
                        .pageIsCorrect(page,"/signup");
  });
  test("Should be able to register with firstname,lastname,email,password,and confirm password",async({page})=>{

    await registerPage.act()
                         .load(page);

    const registerRequestBody = registerApi.get()
                                        .generateUser();

     await registerPage.act()
                                          .register(page,registerRequestBody);

   await todoPage.verify()
                  .welcomeIsDisplayed(page);

  });
  test("Should Not Be Able To Register With The registered Email",async({page,request})=>{

    await registerPage.act()
                      .load(page);

    const registerRequestBody = registerApi.get()
                                        .generateUser();

    await registerApi.act().register(request,registerRequestBody);
                                      
    await registerPage.act()
                      .registerWithTheRegisteredEmail(page,registerRequestBody);

  await registerPage.verify()
                      .errorMessageIsDisplayed(page);

  await registerPage.verify()                     
                      .emailIsAlreadyRegistered(page);


  });

});
