import { APIRequestContext} from "@playwright/test";
import { RegisterRequest } from "../models/register/request/RegisterRequest";


export default class UserAPI{

  private readonly baseUrl = "/api/v1/users";
  private request:APIRequestContext;

  constructor(request:APIRequestContext){
    this.request = request;
  }

  public async register(registerRequest:RegisterRequest){
    
    return await this.request.post(this.baseUrl+"/register",{
      data:{
        firstName: registerRequest.getFirstName(),
        lastName: registerRequest.getLastName(),
        email: registerRequest.getEmail(),
        password: registerRequest.getPassword()
      }
    });

  }

}