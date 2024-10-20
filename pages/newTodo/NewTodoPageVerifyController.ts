export class NewTodoPageVerifyController{
  private static _verify:NewTodoPageVerifyController;

    private NewTodoPageVerifyController() {

    }

    public static  getNewTodoPageVerifyController():NewTodoPageVerifyController {
        if (NewTodoPageVerifyController._verify == null) {
            NewTodoPageVerifyController._verify = new NewTodoPageVerifyController();
        }
        return NewTodoPageVerifyController._verify;
    }
}