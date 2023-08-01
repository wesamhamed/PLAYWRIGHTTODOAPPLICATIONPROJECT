import { test,expect } from '@playwright/test';
import { TodoPage } from '../pages/todo/TodoPage';
import { faker } from '@faker-js/faker';
import { RegisterRequest } from '../models/register/request/RegisterRequest';
import { RegisterPage } from '../pages/Register/RegisterPage';
import { NewTodoPage } from '../pages/newTodo/NewTodoPage';
import { AddTodoRequest } from '../models/Todo/AddTodo/request/AddTodoRequest';

test.describe("Todo test cases",()=>{

  test("Should be able to add a new todo correctly",async({page,context,request})=>{

    //Create new user
    const registerRequest = new RegisterRequest(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      "Test1234"
    );

    const registerPage = new RegisterPage(page,request,context);

    await registerPage.registerUsingTheAPI(registerRequest);

    // UI Steps

    const todoPage = new TodoPage(page);
    
    await todoPage.load();

    const todoText = "Playwright";
    
    const newTodoPage = await todoPage
                                   .clickOnPlusButton();

     await newTodoPage.addNewTodo(todoText);

     const addedTodoText = await todoPage.getTodoTextByIndex(0);

     await expect(addedTodoText).toEqual(todoText);

  });
  test("Should be able to delete a todo correctly",async({page,context,request})=>{

    //Create new user
    const registerRequest = new RegisterRequest(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      "Test1234"
    );

    const registerPage = new RegisterPage(page,request,context);

    const registerResponse = await registerPage.registerUsingTheAPI(registerRequest);
    
    //Add new Todo
    const addTodoRequest = new AddTodoRequest("Playwright",true);
    const newTodoPage = new NewTodoPage(page,request);
    newTodoPage.addNewTodoUsingAPI(addTodoRequest,registerResponse.access_token);

    //UI steps

    const todoPage = new TodoPage(page);

     await todoPage
                  .load();

    await todoPage
                .deleteTodoByIndex(0);
          
    const noTodoMessage = await todoPage.getNoTodoMessage();

    await expect(noTodoMessage).toBeVisible();

  });
 
});