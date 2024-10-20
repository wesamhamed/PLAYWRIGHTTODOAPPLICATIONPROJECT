import { APIRequestContext } from "@playwright/test";
import {EndPoint} from "../../../data/EndPoints";
import { RegisterRequestBody} from "../../../models";

export class RegisterApiActController{

  private static _act:RegisterApiActController;

  private constructor() {

  }

  public static getRegisterApiActController():RegisterApiActController {
      if (RegisterApiActController._act == null) {
        RegisterApiActController._act = new RegisterApiActController();
      }
      return RegisterApiActController._act;
  }

  public async register(request:APIRequestContext, registerRequest:RegisterRequestBody){
    return await request.post(EndPoint.API_REGISTER_ENDPOINT,{
      data:{
        firstName: registerRequest.getFirstName(),
        lastName: registerRequest.getLastName(),
        email: registerRequest.getEmail(),
        password: registerRequest.getPassword()
      }
    });
  }
}

