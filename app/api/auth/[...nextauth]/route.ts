import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
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
      return "/admin"; 
    },
  },
  
  // pages:{signIn: '/auth/signin',}
};

const handler = NextAuth(authOptions);

export {handler as POST, handler as GET}
