export class AddTodoRequest {
  private item!:string;
  private isCompleted!:boolean;
  constructor(item:string, isCompleted:boolean) {
          this.isCompleted = isCompleted;
          this.item = item;
  }
  public getItem() {
      return this.item;
  }
  public setItem(item:string) {
       this.item = item;
  }
  public getIsCompleted() {
      return this.isCompleted;
  }
  public setIsCompleted(isCompleted:boolean) {
       this.isCompleted = isCompleted;
  }
}
