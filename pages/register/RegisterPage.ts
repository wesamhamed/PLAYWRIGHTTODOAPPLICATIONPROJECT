import { RegisterPageActController } from "./RegisterPageActController";
import { RegisterPageGetController } from "./RegisterPageGetController";
import { RegisterPageVerifyController } from "./RegisterPageVerifyController";

export class RegisterPage{

  private static _registerPage:RegisterPage;

  private _get:RegisterPageGetController;
  private _act:RegisterPageActController;
  private _verify:RegisterPageVerifyController;


  public act():RegisterPageActController {
      return this._act;
  }

  public verify():RegisterPageVerifyController {
      return this._verify;
  }

  public get():RegisterPageGetController {
      return this._get;
  }

  private constructor();
  private constructor( get:RegisterPageGetController,  act:RegisterPageActController,  verify:RegisterPageVerifyController);
  private constructor( get?:RegisterPageGetController,  act?:RegisterPageActController,  verify?:RegisterPageVerifyController) {
      this._get = get!;
      this._act = act!;
      this._verify = verify!;
  }

  public static  getRegisterPage():RegisterPage {
      if (RegisterPage._registerPage == null) {
        RegisterPage._registerPage = new RegisterPage(RegisterPageGetController.getRegisterPageGetController(), RegisterPageActController.getRegisterPageActController(), RegisterPageVerifyController.getRegisterPageVerifyController());
      }
      return RegisterPage._registerPage;
  }
  // private  page:Page;
  // private request?:APIRequestContext;
  // private context?:BrowserContext;

  // constructor(page:Page,request?:APIRequestContext,context?:BrowserContext){
  //   this.page = page;
  //   this.request = request;
  //   this.context = context;
  // }
 
  

  
  // public async registerUsingTheAPI(registerRequest:RegisterRequestBody){

  //     const userAPI = new UserAPI(this.request!);

  //     const response = await userAPI.register(registerRequest);

  //     const responseBody = await response.json() as RegisterResponseBody;
  //     const accessToken = await responseBody.access_token;
  //     const userID = responseBody.userID;
  //     const firstName = responseBody.firstName;

  //     await this.context!.addCookies([
  //         {
  //         name:"access_token",
  //         value: accessToken,
  //         url:config.use?.baseURL
  //         },
  //         {
  //         name:"firstName",
  //         value: firstName,
  //         url:config.use?.baseURL
  //         },
  //         {
  //         name:"userID",
  //         value: userID,
  //         url:config.use?.baseURL
  //         }
  //     ]);
  //     return responseBody;
  // }
}