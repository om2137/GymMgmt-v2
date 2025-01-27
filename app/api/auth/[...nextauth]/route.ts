import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "User", type: "text", placeholder: "Username" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        const user = credentials?.username ||"test";
        return {
          id: "user",
          name: user,
          email: 'test@gmail.com',
          
        };
      },
    }),
  ],
  callbacks: {
    async redirect() {
      return "/admin"; // Redirect to a custom page after login
    },
  },
  
  // pages:{signIn: '/auth/signin',}
});

export { handler as GET, handler as POST };
