import {request} from "@playwright/test";

export default async function globalConfig(){
  // admin
  const requestContext1 = await request.newContext();
  await requestContext1.get("https://qacart-todo.herokuapp.com/api/v1/seed");
  await requestContext1.storageState({
    path:"admin.json"
  });

   // user
  const requestContext2 = await request.newContext();
   await requestContext2.get("https://qacart-todo.herokuapp.com/api/v1/seed");
   await requestContext2.storageState({
     path:"user.json"
   });

}