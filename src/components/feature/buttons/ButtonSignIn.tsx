
import { LoginForm } from "@/types/Auth.type"
import { ReactNode } from "react"

export function ButtonSignIn({ type, children, info }: { children: ReactNode, type: "google" | "credentials", info?: LoginForm }) {
  return (
    <form
      action={async () => {
        "use server"
      }}
    >
      {children}
    </form>
  )
} 