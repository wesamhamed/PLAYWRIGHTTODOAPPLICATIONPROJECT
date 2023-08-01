import { APIRequestContext } from '@playwright/test';
import { AddTodoRequest } from '../models/Todo/AddTodo/request/AddTodoRequest';

export default class TodoAPI{

  private request:APIRequestContext;

  private readonly baseUrl ="/api/v1/tasks";

  constructor(request:APIRequestContext){
    this.request = request;
  }

  public async addTodo(addTodoRequest:AddTodoRequest,token:string){

    return await this.request.post(this.baseUrl,{
      headers:{
        'Authorization': `Bearer ${token}`
      },
      data:{
        isCompleted: addTodoRequest.getIsCompleted(),
        item: addTodoRequest.getItem()
      }
    });


  }
}