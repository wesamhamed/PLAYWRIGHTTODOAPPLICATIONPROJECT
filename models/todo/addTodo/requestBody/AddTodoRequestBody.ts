export class AddTodoRequestBody {
  private item!:string;
  private isCompleted!:boolean;
  constructor(item:string)
  constructor(item:string, isCompleted:boolean);
  constructor(item:string, isCompleted?:boolean) {
          this.item = item;
          this.isCompleted = isCompleted!;
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
