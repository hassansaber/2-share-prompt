import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

import User from "@/models/user";
import { connectToDB } from "@/utils/database";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {

    async session({ session }) {

      await connectToDB();
      const sessionUser = await User.findOne({
        email: session.user.email
      })
      console.log('session');
      console.log(sessionUser);
      // session.user.id = sessionUser._id.toString();

      return session
    },


    async singIn({ profile, user }) {
      try {
        // serverless -> lambda 
        // await connectToDB();
        // console.log('connectToDB');

        // // check if user already exists 
        // const userExists = await User.findOne({
        //   email: profile.email
        // })
        console.log('sign in', user);

        // // if not, create a new user
        // if (!userExists) {
        //   console.log('creating user');
        //   await User.create({
        //     email: profile.email,
        //     username: profile.name.replace(" ", "").toLowerCase(),
        //     image: profile.image
        //   })
        // }

        return true

      } catch (error) {
        console.log(error);

        return false
      }
    }
  }

})



export { handler as GET, handler as POST }