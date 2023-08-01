import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';
import ErrorMessages from '../data/ErrorMessages';
import { RegisterRequest } from '../models/register/request/RegisterRequest';
import { faker } from '@faker-js/faker';
import UserAPI from '../api/UserAPI';


test.describe("Login test cases",async()=>{

  
  test("Should be able to login with email and password",async({page,request,context})=>{

    //Create new user    
    const registerRequest = new RegisterRequest(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      "Test1234"
    );

    const userAPI = new UserAPI(request);

    await userAPI.register(registerRequest);

    //UI steps

    let loginPage = new LoginPage(page);

    loginPage = await loginPage.load();

    let todoPage = await loginPage.login(registerRequest.getEmail(),registerRequest.getPassword());

    await expect( await todoPage.getNoTodoMessage()).toBeVisible();
  
  });
  test("Should Not Be Able To Login If Password Is Not Correct",async({page,request})=>{

    //Create new user    
    const registerRequest = new RegisterRequest(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      "Test1234"
    );

    const userAPI = new UserAPI(request);

    await userAPI
               .register(registerRequest);

    //UI steps

    let loginPage = new LoginPage(page);

    loginPage = await loginPage
                               .load();

    loginPage = await loginPage
                         .loginIfPasswordIsNotCorrect(registerRequest.getEmail(),"wrong password");

     await expect(await loginPage.getErrorMessage()).toBeVisible();
     await expect(await loginPage.getErrorMessageText()).toBe(ErrorMessages.EMAIL_AND_PASSWORD_NOT_CORRECT_LOGIN);

  });
});
