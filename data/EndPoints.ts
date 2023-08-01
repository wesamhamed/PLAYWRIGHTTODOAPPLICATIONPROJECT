export default class EndPoint{
  public static readonly API_REGISTER_ENDPOINT = "/api/v1/users/register";
  public static readonly API_TODO_ENDPOINT = "/api/v1/tasks";
  public static readonly API_LOGIN_ENDPOINT = "/api/v1/users/login";
  public static readonly API_SEED_ENDPOINT = "/api/v1/seed";
  public static readonly API_BASE_URL = "https://qacart-todo.herokuapp.com";
  public static readonly HOME_PAGE_ENDPOINT = "https://qacart-todo.herokuapp.com";
  public static readonly LOGIN_PAGE_ENDPOINT = EndPoint.HOME_PAGE_ENDPOINT + "/login";
  public static readonly REGISTER_PAGE_ENDPOINT = EndPoint.HOME_PAGE_ENDPOINT + "/signup";
  public static readonly NEW_TODO_ENDPOINT = EndPoint.HOME_PAGE_ENDPOINT + "/todo/new";
  public static readonly TODO_PAGE_ENDPOINT = EndPoint.HOME_PAGE_ENDPOINT  + "/todo";
}