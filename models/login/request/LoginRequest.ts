export class LoginRequest{
  private email: string;
  private password: string;
  constructor(email:string, password:string){
    this.email = email;
    this.password = password;
  }

public getEmail():string {
    return this.email;
}
public setEmail(email: string):void {
    this.email = email;
}
public getPassword() {
    return this.password;
}
public setPassword(password:string) {
    this.password = password;
}
}

