import { BrowserContext } from "@playwright/test";

export interface _ICookie{
  name: string;

  value: string;

  /**
   * either url or domain / path are required. Optional.
   */
  url?: string;

  /**
   * either url or domain / path are required Optional.
   */
  domain?: string;

  /**
   * either url or domain / path are required Optional.
   */
  path?: string;

  /**
   * Unix time in seconds. Optional.
   */
  expires?: number;

  /**
   * Optional.
   */
  httpOnly?: boolean;

  /**
   * Optional.
   */
  secure?: boolean;

  /**
   * Optional.
   */
  sameSite?: "Strict"|"Lax"|"None";
}
export async function injectCookiesToContext(context:BrowserContext,cookies: Array<_ICookie>){
  return await context.addCookies([...cookies]);
}