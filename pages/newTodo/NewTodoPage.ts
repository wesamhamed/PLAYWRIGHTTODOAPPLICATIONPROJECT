import {  APIRequestContext, Page } from "@playwright/test";
import { TodoPage } from "../todo/TodoPage";
import TodoAPI from "../../api/TodoAPI";
import { AddTodoRequest } from "../../models/Todo/AddTodo/request/AddTodoRequest";

export class NewTodoPage{
  private page:Page;
  private request?:APIRequestContext;

  constructor(page:Page,request?:APIRequestContext){
    this.page = page;
    this.request = request;
  }
  public async load() {
    await this.page.goto("/todo/new")
    return this;
  }
  private get newTodoInput(){
    return "[data-testid='new-todo']";
  }
  private get newTodoButton(){
    return "[data-testid='submit-newTask']";
  }
  public async addNewTodo(item:string) {
    await this.page.locator(this.newTodoInput).clear();
    await this.page.locator(this.newTodoInput).type(item);
    await this.page.locator(this.newTodoButton).click();
    return new TodoPage(this.page);
  }
  public async addNewTodoUsingAPI(addTodoRequest:AddTodoRequest,token:string){
    await new TodoAPI(this.request!).addTodo(addTodoRequest,token)
  }
}