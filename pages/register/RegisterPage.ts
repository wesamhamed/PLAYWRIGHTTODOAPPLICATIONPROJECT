import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import config from "../../playwright.config";
import { TodoPage } from "../todo/TodoPage";
import { RegisterRequest } from "../../models/register/request/RegisterRequest";
import UserAPI from "../../api/UserAPI";
import { RegisterResponse } from "../../models/register/response/RegisterResponse";

export class RegisterPage{
  private  page:Page;
  private request?:APIRequestContext;
  private context?:BrowserContext;

  constructor(page:Page,request?:APIRequestContext,context?:BrowserContext){
    this.page = page;
    this.request = request;
    this.context = context;
  }
  public async load():Promise<RegisterPage>{
    await this.page.goto("/signup");
    await this.page.waitForURL("/signup");
    return this;
  }
  private get firstNameInput(){
    return "[data-testid='first-name']";
  }
  private get lastNameInput(){
    return "[data-testid='last-name']";
  }
  private get emailInput(){
    return "[data-testid='email']";
  }
  private get passwordInput(){
    return "[data-testid='password']";
  }
  private get confirmPasswordInput(){
    return "[data-testid='confirm-password']";
  }
  private get submitButton(){
    return "[data-testid='submit']";
  }

  private get errorMessage(){
    return "[data-testid='error'] div:last-child";
  }
  public async register(registerRequest:RegisterRequest):Promise<TodoPage>{
   
    await this.page.locator(this.firstNameInput).clear();
    await this.page.locator(this.firstNameInput).type(registerRequest.getFirstName());

    await this.page.locator(this.lastNameInput).clear();
    await this.page.locator(this.lastNameInput).type(registerRequest.getLastName());

    await this.page.locator(this.emailInput).clear();
    await this.page.locator(this.emailInput).type(registerRequest.getEmail());

    await this.page.locator(this.passwordInput).clear();
    await this.page.locator(this.passwordInput).type(registerRequest.getPassword());

    await this.page.locator(this.confirmPasswordInput).clear();
    await this.page.locator(this.confirmPasswordInput).type(registerRequest.getPassword());

    await this.page.locator(this.submitButton).click();

    await this.page.waitForURL("/todo");

    return new TodoPage(this.page);
  }
  public async registerWithTheRegisteredEmail(registerRequest:RegisterRequest):Promise<RegisterPage>{

    await this.page.locator(this.firstNameInput).clear();
    await this.page.locator(this.firstNameInput).type(registerRequest.getFirstName());

    await this.page.locator(this.lastNameInput).clear();
    await this.page.locator(this.lastNameInput).type(registerRequest.getLastName());

    await this.page.locator(this.emailInput).clear();
    await this.page.locator(this.emailInput).type(registerRequest.getEmail());

    await this.page.locator(this.passwordInput).clear();
    await this.page.locator(this.passwordInput).type(registerRequest.getPassword());

    await this.page.locator(this.confirmPasswordInput).clear();
    await this.page.locator(this.confirmPasswordInput).type(registerRequest.getPassword());

    await this.page.locator(this.submitButton).click();

    await this.page.locator(this.errorMessage).waitFor({
      state:"visible",
      timeout:5000
    });
    
    return this;
  }

  public async getErrorMessage(){
    return  this.page.locator(this.errorMessage);
  } 
  public async getErrorMessageText(){
    return  this.page.locator(this.errorMessage).innerText();
  } 
  public async registerUsingTheAPI(registerRequest:RegisterRequest){

      const userAPI = new UserAPI(this.request!);

      const response = await userAPI.register(registerRequest);

      const responseBody = await response.json() as RegisterResponse;
      const accessToken = await responseBody.access_token;
      const userID = responseBody.userID;
      const firstName = responseBody.firstName;

      await this.context!.addCookies([
          {
          name:"access_token",
          value: accessToken,
          url:config.use?.baseURL
          },
          {
          name:"firstName",
          value: firstName,
          url:config.use?.baseURL
          },
          {
          name:"userID",
          value: userID,
          url:config.use?.baseURL
          }
      ]);
      return responseBody;
  }
}