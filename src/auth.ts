import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug : false,
  providers: [
  //   Google({
  //   clientId: process.env.AUTH_GOOGLE_ID,
  //   clientSecret: process.env.AUTH_GOOGLE_SECRET,
    
  //  }), 
   Credentials({
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
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken
      return session;
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