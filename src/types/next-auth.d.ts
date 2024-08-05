import NextAuth from "next-auth"
import { Customer } from "./customer"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Customer
  }
}
