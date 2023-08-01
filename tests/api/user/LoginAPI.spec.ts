import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { RegisterRequest } from '../../../models/register/request/RegisterRequest';


test.describe("Login API test cases",()=>{

  test("Should be able to login using the API",async({request})=>{

    const registerRequest = new RegisterRequest(faker.person.firstName(),
                                              faker.person.lastName(),
                                              faker.internet.email(),
                                              "Test1234");
  
    const response = await request.post("/api/v1/users/register",{
      data:{
        firstName: registerRequest.getFirstName(),
        lastName: registerRequest.getLastName(),
        email: registerRequest.getEmail(),
        password: registerRequest.getPassword()
      }
    });
  
    await expect(await response.ok()).toBeTruthy();
    await expect(await response.json()).toHaveProperty("firstName",registerRequest.getFirstName());
  
  });

});

