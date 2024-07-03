
import { signIn } from "@/auth"
import { LoginForm } from "@/types/auth"
import { ReactNode } from "react"

export function ButtonSignIn({ type, children, info }: { children: ReactNode, type: "google" | "credentials", info?: LoginForm }) {
  return (
    <form
      action={async () => {
        "use server"
       const res =   await signIn(type)
      }}
    >
      {children}
    </form>
  )
} 