import { test } from '@playwright/test';
import playwrightConfig from '../../../playwright.config';
import { RegisterApi, TodoApi } from '../../../api';
import {HomePage,TodoPage,NewTodoPage} from '../../../pages';
import { generateCookie } from '../../../utils/generateCookie';
import { injectCookiesToContext } from '../../../utils/injectCookiesToContext';

test.describe("Todo test cases",()=>{

  const registerApi = RegisterApi.getRegisterApi();
  const homePage = HomePage.getHomePage();
  const todoPage = TodoPage.getTodoPage();
  const newTodoPage = NewTodoPage.getNewTodoPage();
  const todoApi = TodoApi.getTodoApi();

  test("Should be able to add a new todo correctly",async({page,context,request})=>{
    
   const registerRequestBody = registerApi.get()
                .generateUser();

  const registerResponse = await registerApi.act()
                .register(request,registerRequestBody);
    
  await homePage.act()
                .load(page);

  const registerResponseBody = await registerApi.get()
              .registerResponseBody(registerResponse);

   await injectCookiesToContext(context,[
      generateCookie({name:"access_token",value:registerResponseBody.access_token,url:playwrightConfig.use?.baseURL}),
      generateCookie({name:"firstName",value: registerResponseBody.firstName,url:playwrightConfig.use?.baseURL}),
      generateCookie({name:"userID", value: registerResponseBody.userID,url:playwrightConfig.use?.baseURL})
    ]);

    await todoPage.act()
              .load(page);


    // UI Steps
    
    const todoText = "Playwright";
    
    await todoPage.act()
                .clickOnPlusButton(page);
                
    await newTodoPage.act()         
                .addNewTodo(page, todoText);
  

      const addedTodoText = await todoPage.get()
                .getTodoTextByIndex(page,0);

      todoPage.verify()
                .addedTodoTextIsCorrect(todoText, addedTodoText);

  });
  test("Should be able to delete a todo correctly",async({page,context,request})=>{

    const registerRequestBody = registerApi.get()
                .generateUser();

  const registerResponse = await registerApi.act()
                .register(request,registerRequestBody);

  const registerResponseBody = await registerApi.get()
                .registerResponseBody(registerResponse);

  await homePage.act()
                .load(page);

  await injectCookiesToContext(context,[
    generateCookie({name:"access_token",value:registerResponseBody.access_token,url:playwrightConfig.use?.baseURL}),
    generateCookie({name:"firstName",value: registerResponseBody.firstName,url:playwrightConfig.use?.baseURL}),
    generateCookie({name:"userID", value: registerResponseBody.userID,url:playwrightConfig.use?.baseURL})
    ]);
      
  
    
    //Add new Todo
    const addTodoRequest = todoApi.get()
                   .generateTodo();

    await todoApi.act()
                .addTodo(request,addTodoRequest, registerResponseBody.access_token);

    //UI steps

     await todoPage.act()
                  .load(page);

    await todoPage.act()
                .deleteTodoByIndex(page,0);
   

    await todoPage.verify()
                .noTodoMessageIsDisplayed(page);

  });
 
});