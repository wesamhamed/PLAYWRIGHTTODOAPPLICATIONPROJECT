import { faker } from "@faker-js/faker";
import { AddTodoRequestBody, AddTodoResponseBody ,DeleteTodoByIdResponseBody,Error, GetTodoResponseBody} from "../../models";
import { APIResponse } from "@playwright/test";

export class TodoApiGetController{

  private static _get:TodoApiGetController;

    private constructor() {
    }

    public static getTodoApiGetController():TodoApiGetController {
        if (TodoApiGetController._get == null) {
            return TodoApiGetController._get = new TodoApiGetController();
        }
        return TodoApiGetController._get;
    }
    public generateTodo(){
        const item = faker.company.catchPhrase();
        const isCompleted = false;
        return new AddTodoRequestBody(item,isCompleted);
    }
    public async addTodoResponseBody(response: APIResponse):Promise<AddTodoResponseBody> {
        return await response.json() as AddTodoResponseBody;
    }
    public addTodoRequestBody(item:string):AddTodoRequestBody {
        return new AddTodoRequestBody(item);
    }
    public async error(response:APIResponse) {
        return await response.json() as Error;
    }
    public async getTodoResponseBody(getTodoResponse:APIResponse):Promise<GetTodoResponseBody>  {
        return await getTodoResponse.json() as GetTodoResponseBody;
    }
    public async deleteTodoByIdResponseBody(deleteTodoResponse:APIResponse):Promise<DeleteTodoByIdResponseBody> {
        return await deleteTodoResponse.json() as DeleteTodoByIdResponseBody
    }
  
}