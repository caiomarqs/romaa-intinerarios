import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authLogin } from '../../../lib/auth'

const authOptiopns = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize: (credentials, req) => authLogin(credentials)
        })
    ],
    pages: {
        signIn: '/auth/signin'
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user
            return session
        }
    }
}

export default NextAuth(authOptiopns)