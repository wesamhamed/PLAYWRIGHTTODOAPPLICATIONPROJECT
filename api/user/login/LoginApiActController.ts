import { APIRequestContext } from "@playwright/test";
import {EndPoint} from "../../../data";
import {LoginRequestBody} from "../../../models";

export class LoginApiActController{

  private static _act:LoginApiActController;

    private constructor(){

    }

    public static getLoginApiActController():LoginApiActController {
        if (LoginApiActController._act == null) {
          LoginApiActController._act = new LoginApiActController();
        }
        return LoginApiActController._act;
    }


  public async login(request:APIRequestContext,loginRequestBody:LoginRequestBody){
    return await request.post(EndPoint.API_LOGIN_ENDPOINT,{
        data:{
          email: loginRequestBody.getEmail(),
          password: loginRequestBody.getPassword(),
        }
      });
}
}