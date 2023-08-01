class Error {
  private message!:string;

  public getMessage() {
      return this.message;
  }

  public setMessage(message:string) {
      this.message = message;
  }
 }

 export default Error;