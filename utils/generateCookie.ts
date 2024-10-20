import { _ICookie } from "./injectCookiesToContext";

export function generateCookie({name, value,url}:_ICookie):_ICookie{
  return  {
    name,
    value,
    url
    }
}