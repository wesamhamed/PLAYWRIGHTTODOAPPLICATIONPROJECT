export class LoginResponse{
  private userID: string;
  private access_token: string;
  private firstName: string;
  constructor(firstName:string, access_token:string,userID:string){
    this.firstName = firstName;
    this.access_token = access_token;
    this.userID = userID;
  }
  public getFirstName() {
    return this.firstName;
  }
  public setFirstName(firstName:string):void {
     this.firstName =firstName;
  }
  public getAccessToken() {
    return this.access_token;
  }
  public setAccessToken(access_token:string):void {
    this.access_token = access_token;
  }
  public getUserID() {
    return this.userID;
  }
  public setUserID(userID:string):void {
    this.userID = userID;
  }

}

