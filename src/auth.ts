import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
   }), Credentials({
    credentials: {
      email: {},
      password: {},
      
    },
    authorize: async (credentials) => {
      let user

      // logic to salt and hash password
      // const pwHash = saltAndHashPassword(credentials.password)

      // logic to verify if user exists
      // user = await getUserFromDb(credentials.email, pwHash)

      if (!user) {
        // No user found, so this is their first attempt to login
        // meaning this is also the place you could do registration
        throw new Error("User not found.")
      }

      // return user object with the their profile data
      return user
    },

    
  },
  )],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
    newUser: "/register",

  },
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
        
      return session
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      // // Allows relative callback URLs
      // if (url.startsWith("/")) return `${baseUrl}${url}`
      // // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
})