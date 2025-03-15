import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { z } from 'zod';

const credentialsSchema = z.object({
  username: z.string().min(1, "Username is required").max(50),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

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

        const parsedCredentials = credentialsSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error(parsedCredentials.error.format());
          throw new Error("Invalid username or password");
        }

        if (!credentials?.username || !credentials.password) {
          alert("wrong info")
          return null;
        }

        // const { username, password } = parsedCredentials.data;
        const {username, password} = credentials;
        console.log(credentials.username,parsedCredentials);
        const user = await prisma.admin.findFirst({
          where:{
            AdminName: username,
            password: password
          }
        });
        
        if(!user){
          // throw new Error("Invalid username or password");
          return null;
        }
        // Bcrypt test
        const hashed = await bcrypt.hash(user?.password, 10);
        const verify = await bcrypt.compare('om',hashed);
        console.log("Password: ",user?.password,' hash: ',hashed, ' status: ',verify);
        // Bcrypt test end
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
