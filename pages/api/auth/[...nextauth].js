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
    }
}

export default NextAuth(authOptiopns)