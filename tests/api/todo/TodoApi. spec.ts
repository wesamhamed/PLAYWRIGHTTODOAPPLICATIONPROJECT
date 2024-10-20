import { test } from '@playwright/test';
import { RegisterApi,TodoApi } from '../../../api';


test.describe("Todo API test cases",()=>{

    const registerApi = RegisterApi.getRegisterApi();
    const todoApi = TodoApi.getTodoApi();

    test("Should Be Able To Add Todo",async({request,context})=>{
        
        const registerRequestBody = registerApi.get()
                    .generateUser();

        const registerResponse = await registerApi.act()
                .register(request,registerRequestBody);
       
        const registerResponseBody = await registerApi.get()
                                        .registerResponseBody(registerResponse);

        const addTodoRequest = todoApi.get()
                .generateTodo();

        const response = await todoApi.act()
                .addTodo(request,addTodoRequest,registerResponseBody.access_token);

        const returnedTodo = await todoApi.get()
                .addTodoResponseBody(response);

        todoApi.verify()
                .statusCodeIsCorrect(response,201)
                .itemIsCorrect(returnedTodo, addTodoRequest)
                .isCompletedCorrect(returnedTodo, addTodoRequest);
        
    });
    test("should Not Be Able To Add Todo If Is Completed Missing",async({request})=>{

        const registerRequestBody = registerApi.get()
                    .generateUser();

        const registerResponse = await registerApi.act()
                    .register(request,registerRequestBody);
        
        const registerResponseBody =  await registerApi.get()
                    .registerResponseBody(registerResponse);

        const addTodoRequest = todoApi.get()
                .addTodoRequestBody("item 1")

        const response = await todoApi.act()
                .addTodo(request,addTodoRequest, registerResponseBody.access_token);
        
        const returnedError = await todoApi.get()
                .error(response);

        todoApi.verify()
                .statusCodeIsInCorrect(response, 400)
                .isCompletedIsRequired(returnedError);

    });
    test("Should Be Able To Get A Todo By ID",async({request})=>{

        const registerRequestBody = registerApi.get()
            .generateUser();

        const registerResponse = await registerApi.act()
            .register(request,registerRequestBody);

        const registerResponseBody = await registerApi.get()
            .registerResponseBody(registerResponse);

        const addTodoRequest = todoApi.get()
                .generateTodo();

        const response = await todoApi.act()
                .addTodo(request,addTodoRequest,registerResponseBody.access_token);

        const addTodoResponseBody = await todoApi.get()
                .addTodoResponseBody(response);


        const getTodoResponse = await todoApi.act()
                        .getTodoById(request,registerResponseBody.access_token,addTodoResponseBody._id);

        const returnedTodo = await todoApi.get()
                        .getTodoResponseBody(getTodoResponse);

        todoApi.verify()
                        .statusCodeIsCorrect(getTodoResponse, 200)               
                        .itemIsCorrectByGetTodoById(returnedTodo, addTodoResponseBody)
                        .isCompletedIsCorrectByGetTodoById(returnedTodo, addTodoResponseBody);
    });

    test("Should Be Able To Delete Todo By ID",async({request})=>{

       const registerRequestBody = registerApi.get()
            .generateUser();

        const registerResponse = await registerApi.act()
            .register(request,registerRequestBody);

        const registerResponseBody = await registerApi.get()
            .registerResponseBody(registerResponse);

       const addTodoRequest = todoApi.get()
                .generateTodo();

        const response = await todoApi.act()
                .addTodo(request,addTodoRequest,registerResponseBody.access_token);

        const addTodoResponseBody = await todoApi.get()
                .addTodoResponseBody(response);

        const deleteTodoResponse = await todoApi.act()
                .deleteTodoById(request,addTodoResponseBody._id,registerResponseBody.access_token);

        const deleteTodoByIdResponse = await todoApi.get()
                .deleteTodoByIdResponseBody(deleteTodoResponse);

        todoApi.verify()
                .statusCodeIsCorrect(deleteTodoResponse, 200)
                .itemIsCorrectByDeleteTodoById(addTodoResponseBody, deleteTodoByIdResponse)
                .isCompletedIsCorrectByDeleteTodoById(addTodoResponseBody, deleteTodoByIdResponse);
        
    });
});