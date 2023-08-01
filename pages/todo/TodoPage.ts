import { APIRequestContext, Page } from "@playwright/test";
import { NewTodoPage } from "../newTodo/NewTodoPage";

export class TodoPage{
  private page:Page;
  private request?:APIRequestContext;

  constructor(page:Page,request?:APIRequestContext){
    this.page = page;
    this.request = request;
  }
  public async load():Promise<TodoPage> {
    await this.page.goto("/todo");
    return new TodoPage(this.page);
  }
  
  private get welcomeMessage(){
    return "[data-testid='welcome']";
  }
  private get addButton(){
    return "[data-testid='add']";
  }
  private get todoItem(){
    return "[data-testid='todo-item']";
  }
  private get firstTodoCheckbox(){
    return "[data-testid='complete-task']:first-child";
  }
  private get deleteIcon(){
    return "[data-testid='delete']";
  }
  private get noTodosMessage(){
    return "[data-testid='no-todos']";
  }

  public async clickOnPlusButton():Promise<NewTodoPage> {
    await this.page.locator(this.addButton).click();
    return new NewTodoPage(this.page);
  }
  public async getWelcomeMessage() {
   return  this.page.locator(this.welcomeMessage);
  }
  public async getTodoTextByIndex(index:number){
    return await this.page.locator(this.todoItem).nth(index).innerText();
  }
  public async deleteTodoByIndex(index:number):Promise<TodoPage>{
    await this.page.locator(this.deleteIcon).nth(index).click();
    return this;
  }
  async getNoTodoMessage(){
    return  this.page.locator(this.noTodosMessage);
  }

}