import { APIResponse, expect } from "@playwright/test";
import { AddTodoRequestBody, AddTodoResponseBody, DeleteTodoByIdResponseBody, Error, GetTodoResponseBody } from "../../models";
import { ErrorMessages } from "../../data";

export class TodoApiVerifyController{

  private static _verify:TodoApiVerifyController;

  private constructor() {

  }

  public static getTodoApiVerifyController():TodoApiVerifyController {
      if (TodoApiVerifyController._verify == null) {
        TodoApiVerifyController._verify = new TodoApiVerifyController();
      }
      return TodoApiVerifyController._verify;
  }
  public statusCodeIsCorrect(addTodoResponse: APIResponse , statusCode:number):TodoApiVerifyController {
      expect(addTodoResponse.ok()).toBeTruthy();
      expect(addTodoResponse.status()).toBe(statusCode);
     return TodoApiVerifyController.getTodoApiVerifyController();
  }
  public statusCodeIsInCorrect(response:APIResponse,statusCode:number):TodoApiVerifyController {
     expect( response.ok()).toBeFalsy();
     expect( response.status()).toBe(statusCode);
    return TodoApiVerifyController.getTodoApiVerifyController();
}

  public itemIsCorrect(returnedTodo:AddTodoResponseBody, addTodoRequest:AddTodoRequestBody):TodoApiVerifyController {
    expect(returnedTodo).toHaveProperty('item',addTodoRequest.getItem());
    return TodoApiVerifyController.getTodoApiVerifyController();
  }
  public itemIsCorrectByGetTodoById(returnedTodo:GetTodoResponseBody,addTodoResponseBody:AddTodoResponseBody):TodoApiVerifyController {
    expect(returnedTodo).toHaveProperty('item',addTodoResponseBody.item);
    return TodoApiVerifyController.getTodoApiVerifyController();
  }

public itemIsCorrectByDeleteTodoById(addTodoResponseBody:AddTodoResponseBody ,deleteTodoByIdResponse: DeleteTodoByIdResponseBody):TodoApiVerifyController {
  expect(deleteTodoByIdResponse).toHaveProperty('item',addTodoResponseBody.item);
  return TodoApiVerifyController.getTodoApiVerifyController();
}
  public isCompletedCorrect(returnedTodo:AddTodoResponseBody, addTodoRequest:AddTodoRequestBody):TodoApiVerifyController {
    expect(returnedTodo).toHaveProperty('isCompleted',addTodoRequest.getIsCompleted());
    return TodoApiVerifyController.getTodoApiVerifyController();
  }
  public isCompletedIsCorrectByGetTodoById(returnedTodo:GetTodoResponseBody,addTodoResponseBody:AddTodoResponseBody):TodoApiVerifyController {
    expect(returnedTodo).toHaveProperty('isCompleted',addTodoResponseBody.isCompleted);
    return TodoApiVerifyController.getTodoApiVerifyController();
  }
  public isCompletedIsCorrectByDeleteTodoById(addTodoResponseBody:AddTodoResponseBody ,deleteTodoByIdResponse: DeleteTodoByIdResponseBody):TodoApiVerifyController{
    expect(deleteTodoByIdResponse).toHaveProperty('isCompleted',addTodoResponseBody.isCompleted);
    return TodoApiVerifyController.getTodoApiVerifyController();
  }
  public isCompletedIsRequired(returnedError:Error):TodoApiVerifyController {
    expect(returnedError).toHaveProperty('message',ErrorMessages.IS_COMPLETED_IS_REQUIRED);
    return TodoApiVerifyController.getTodoApiVerifyController();
}
}