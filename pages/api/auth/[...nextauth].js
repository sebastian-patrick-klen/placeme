import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialProvider({
      name: 'credentials',
      authorize: async (credentials) => {
        console.log('credentials= ', credentials);

        console.log(process.env.NEXTAUTH_SECRET);
        const res = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Authentication failed');
        }

        return {
          id: data.id,
          email: data.email,
        };
        // const client = await connectToClient();
        // const db = client.db();
        // const user = await userExists(db, 'users', {
        //   email: credentials.email,
        // });

        // if (!user) {
        //   // no user with the entered email
        //   client.close();
        //   throw new Error('No user found!');
        // }
        // console.log('user= ', user);

        // // found a user with that email address, check for password
        // const isValid = await verifyPassword(
        //   credentials.password,
        //   user.password
        // );

        // if (!isValid) {
        //   client.close();
        //   throw new Error('Invalid password! Try again!');
        // }

        // client.close();

        // authorization succeeded

        // return object that is encoded for JWT token
      },
    }),
  ],
});
