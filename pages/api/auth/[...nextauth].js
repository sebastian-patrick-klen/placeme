import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  //   encryption: true,
  // },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  providers: [
    CredentialProvider({
      name: 'credentials',
      authorize: async (credentials) => {
        const res = await fetch(
          `https://placeme-backend.onrender.com/api/users/login`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Authentication failed');
        }

        return {
          token: data.token,
          id: data.id,
          email: data.email,
        };
      },
    }),
  ],
});
