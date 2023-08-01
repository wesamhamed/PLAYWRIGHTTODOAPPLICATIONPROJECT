import { faker } from '@faker-js/faker';
import { test,expect } from '@playwright/test';
import { RegisterPage } from '../pages/register/RegisterPage';
import ErrorMessages from "../data/ErrorMessages";
import { RegisterRequest } from '../models/register/request/RegisterRequest';
import UserAPI from '../api/UserAPI';

test.describe("Register test cases",()=>{

  test("Should be able to open the register page",async({page})=>{

    let registerPage = new RegisterPage(page);

    registerPage = await registerPage.load();

    await expect(page).toHaveTitle("QAcart Todo App - Signup page");
    await expect(page).toHaveURL("/signup");
  });
  test("Should be able to register with firstname,lastname,email,password,and confirm password",async({page})=>{

    let registerPage = new RegisterPage(page);

    registerPage = await registerPage
                                   .load();

    const registerRequest = new RegisterRequest( faker.person.firstName(),faker.person.lastName(),
    faker.internet.email(),"Test1234");

    const todoPage = await registerPage.register(registerRequest);

    expect(await todoPage.getWelcomeMessage()).toBeVisible();

  });
  test("should Not Be Able To Register With The registered Email",async({page,request})=>{

    let registerPage = new RegisterPage(page);

    registerPage = await registerPage
                                     .load();

        //Register Request
        const registerRequest = new RegisterRequest(
          faker.person.firstName(),
          faker.person.lastName(),
          faker.internet.email(),
          "Test1234"
        );
                          
        const userAPI = new UserAPI(request);

        await userAPI.register(registerRequest); 


        registerPage = await registerPage
                                  .registerWithTheRegisteredEmail(registerRequest);
    
        expect(await registerPage.getErrorMessage()).toBeVisible();
        expect(await registerPage.getErrorMessageText()).toEqual(ErrorMessages.EMAIL_IS_ALREADY_REGISTERED);

  });

});
