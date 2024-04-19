import { signIn } from "@/auth"
import { ButtonSignIn } from "@/components/feature/ButtonSignIn"

export default function SignIn() {
  return (
    <>

      <form
        action={async (formData) => {
          "use server"
          const res = await signIn("credentials", formData)
          console.log(res)
        }}
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>


        <button>Sign In</button>
      </form>
      <div>
      </div>
      <ButtonSignIn />
    </>
  )
}