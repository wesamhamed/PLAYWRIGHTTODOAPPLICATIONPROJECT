import { Locator, Page } from "@playwright/test";
import { TodoPage } from "../todo/TodoPage";

export class LoginPage{
  private page:Page;

  constructor(page:Page){
      this.page = page;
  }

  private get emailInput(){
    return "[data-testid='email']";
  }
  private get passwordInput(){
    return "[data-testid='password']";
  }
  private get submitButton(){
    return "[data-testid='submit']";
  }
  private get errorMessage(){
    return "[data-testid='error-alert'] div:last-child";
  }
  public async load():Promise<LoginPage> {
    await this.page.goto("/login")
    return this;
  }
  public async login(email:string, password:string):Promise<TodoPage> {
    await this.page.locator(this.emailInput).clear();
    await this.page.locator(this.emailInput).type(email);
    await this.page.locator(this.passwordInput).clear();
    await this.page.locator(this.passwordInput).type(password);
    await this.page.locator(this.submitButton).click();
    await this.page.waitForURL("/todo");
    return new TodoPage(this.page);
  }
  public async loginIfPasswordIsNotCorrect(email:string,password:string):Promise<LoginPage>{
    await this.page.locator(this.emailInput).clear();
    await this.page.locator(this.emailInput).type(email);
    await this.page.locator(this.passwordInput).clear();
    await this.page.locator(this.passwordInput).type(password);
    await this.page.locator(this.submitButton).click();
    await this.page.locator(this.errorMessage).waitFor({
      state:"visible",
      timeout:5000
    });
    return this;
  }
  public async getErrorMessage():Promise<Locator>{
    return  this.page.locator(this.errorMessage);
  }
  public async getErrorMessageText():Promise<string>{
    return  this.page.locator(this.errorMessage).innerText();
  }

}