import { APIRequestContext } from "@playwright/test";
import {EndPoint} from "../../data";
import { AddTodoRequestBody } from "../../models";

export class TodoApiActController{

  private static _act:TodoApiActController;

  private constructor() {

  }

  public static getTodoApiActController():TodoApiActController {
    if (TodoApiActController._act == null) {
        TodoApiActController._act = new TodoApiActController();
    }
    return TodoApiActController._act;
}
public async addTodo(request:APIRequestContext, addTodoRequest:AddTodoRequestBody,token:string){

  return await request.post(EndPoint.API_TODO_ENDPOINT,{
    headers:{
      'Authorization': `Bearer ${token}`
    },
    data:{
      isCompleted: addTodoRequest.getIsCompleted(),
      item: addTodoRequest.getItem()
    }
  });
}
public async deleteTodoById(request:APIRequestContext,token:string,taskId:string){

  return await request.delete(EndPoint.API_TODO_ENDPOINT+"/"+taskId,{
    headers:{
      'Authorization': `Bearer ${token}`
    }
  });
}
public async getTodoById(request:APIRequestContext,token:string,taskId:string){
  
  return await request.get(EndPoint.API_TODO_ENDPOINT+"/"+taskId,{
    headers:{
      'Authorization': `Bearer ${token}`
    }
  });
}

}