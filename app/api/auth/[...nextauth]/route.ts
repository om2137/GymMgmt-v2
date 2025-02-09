import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

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
        console.log("checking data")
        if (!credentials?.username || !credentials.password) {
          alert("wrong info")
          return null;
        }
        console.log(credentials.username);
        const user = await prisma.admin.findFirst({
          where:{
            AdminName: credentials.username,
            password: credentials.password
          }
        });
        // const user = await prisma.admin.findMany();
        console.log(user?.password);
        if(!user){
          // throw new Error("Invalid username or password");
          return null;
        }

        return {
          id: "user",
          name: credentials?.username,
          email: "test@gmail.com",
        };
      },
    }),
  ],
  callbacks: {
    async redirect() {
      return `/admin`;
    },
  },
  pages:{signIn: '/signin',}
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
