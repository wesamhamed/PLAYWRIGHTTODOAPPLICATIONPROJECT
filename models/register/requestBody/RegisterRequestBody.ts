export  class RegisterRequestBody{
  private firstName: string;
  private lastName: string;
  private email: string;
  private password: string;
  constructor(firstName:string, lastName:string,email:string, password:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  public getFirstName() {
    return this.firstName;
}
public setFirstName(firstName:string):void {
    this.firstName = firstName;
}
public getLastName() {
    return this.lastName;
}
public setLastName(lastName:string):void {
    this.lastName = lastName;
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
