import { test } from '@playwright/test';
import { LoginPage,TodoPage } from '../../../../pages';
import { RegisterApi } from '../../../../api';


test.describe("Login test cases",async()=>{
  
  const registerApi = RegisterApi.getRegisterApi();
  const loginPage = LoginPage.getLoginPage();
  const todoPage = TodoPage.getTodoPage();

  test("Should be able to open the login page",async({page})=>{
   
    
  await loginPage.act()
                  .load(page);

  await loginPage.verify()
            .titleIsCorrect(page,"QAcart Todo App - Login page");

  await loginPage.verify()
          .pageIsCorrect(page,"/login");
  });

  test("Should be able to login with email and password",async({page,request})=>{
    
    const registerRequestBody = registerApi.get()
                                      .generateUser();

    await registerApi.act()
                  .register(request,registerRequestBody);

    //UI steps

    await loginPage.act()
                    .load(page);
    
    await loginPage.act()
                    .login(page,registerRequestBody.getEmail(),registerRequestBody.getPassword())

  await todoPage.verify()
                    .welcomeIsDisplayed(page);
  
  });
  test("Should Not Be Able To Login If Password Is Not Correct",async({page,request})=>{

    const registerRequestBody = registerApi.get()
                                      .generateUser();

    await registerApi.act()
                  .register(request,registerRequestBody);

    //UI steps

    await loginPage.act()
                    .load(page);

    await loginPage.act()
                      .loginIfPasswordIsNotCorrect(page,registerRequestBody.getEmail(),"wrong password");

    await loginPage.verify()
                      .errorMessageIsDisplayed(page);
  
    await loginPage.verify()
                      .emailAndPasswordNotCorrectLogin(page);


  });
});
