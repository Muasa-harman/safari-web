// import { NextAuthOptions, getServerSession } from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import CredentialsProvider from 'next-auth/providers/credentials'
// // import {
// //   AuthProviderType,
// //   GetAuthProviderDocument,
// //   LoginDocument,
// //   RegisterWithProviderDocument,
// // } from '@autospace/network/src/gql/generated'
// import { AuthProviderType,GetAuthProviderDocument,LoginDocument,RegisterWithProviderDocument } from '../gql/generated'
// import { fetchGraphQL } from '../fetch'
// import * as jwt from 'jsonwebtoken'
// import { JWT } from 'next-auth/jwt'

// const MAX_AGE = 1 * 24 * 60 * 60
// // const NEXTAUTH_URL=http://localhost:3000
// // const NEXT_PUBLIC_API_URL=({"http://192.168.0.109:3001/graphql"})

// // const apiUrl = process.env.NEXT_PUBLIC_API_URL

// // // const secureCookies = process.env.NEXTAUTH_URL?.startsWith('https://')
// // const secureCookies="http://localhost:3001"
// // const hostName =  new URL( "http://localhost:3000").hostname
// // const rootDomain = 'karthicktech.com'

// const secureCookies = process.env.NEXTAUTH_URL?.startsWith('https://localhost:3001') || false;
// const hostName = new URL(process.env.NEXTAUTH_URL ?? "http://localhost:3001").hostname;
// const rootDomain = process.env.NODE_ENV === "production" ? "karthicktech.com" : "localhost";

// // Ensure correct domain formatting
// const domain = hostName === "localhost" ? hostName : `.${rootDomain}`;

// console.log("Host Name:", hostName);
// console.log("Cookie Domain:", domain);



// export const authOptions: NextAuthOptions = {
//   // Configure authentication providers
//   providers: [
//     // Google OAuth provider configuration
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           scope: 'openid profile',
//         },
//       },
//     }),
//     // Credentials provider configuration for email/password authentication
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       // Authorize function to validate user credentials
//       async authorize(credentials) {
//         // Implement credential validation logic
//         if (!credentials) {
//           throw new Error('Email and password are required')
//         }
//         const { email, password } = credentials

//         try {
//           const { data, error } = await fetchGraphQL({
//             document: LoginDocument,
//             variables: { loginInput: { email, password } },
//           })

//           if (!data?.login.token || error) {
//             throw new Error(
//               'Authentication failed: Invalid credentials or user not found',
//             )
//           }
//           const uid = data.login.user.uid
//           const image = data.login.user.image
//           const name = data.login.user.name

//           return { id: uid, name, image, email }
//         } catch (error) {
//           console.error('Login error:', error)
//           return null
//         }
//       },
//     }),
//   ],

//   // Enable debug mode for development
//   debug: true,

//   // Configure session settings
//   session: {
//     strategy: 'jwt',
//     maxAge: MAX_AGE,
//   },

//   // Configure JWT settings
//   jwt: {
//     maxAge: MAX_AGE,
//     // Custom JWT encoding function
//     async encode({ token, secret }): Promise<string> {
//       // Implement custom JWT encoding logic
//       if (!token) {
//         throw new Error('Token is undefined')
//       }
//       const { sub, ...tokenProps } = token
//       // Get the current date in seconds since the epoch
//       const nowInSeconds = Math.floor(Date.now() / 1000)
//       // Calculate the expiration timestamp
//       const expirationTimestamp = nowInSeconds + MAX_AGE
//       return jwt.sign(
//         { uid: sub, ...tokenProps, exp: expirationTimestamp },
//         secret,
//         {
//           algorithm: 'HS256',
//         },
//       )
//     },
//     // Custom JWT decoding function
//     async decode({ token, secret }): Promise<JWT | null> {
//       // Implement custom JWT decoding logic
//       if (!token) {
//         throw new Error('Token is undefined')
//       }

//       try {
//         const decodedToken = jwt.verify(token, secret, {
//           algorithms: ['HS256'],
//         })
//         return decodedToken as JWT
//       } catch (error) {
//         return null
//       }
//       // ...
//     },
//   },
//   cookies: {
//     sessionToken: {
//       name: `${secureCookies ? '__Secure-' : ''}next-auth.session-token`,
//       options: {
//         httpOnly: true,
//         sameSite: 'lax',
//         path: '/',
//         secure: !!secureCookies,
//         domain: hostName == 'localhost' ? hostName : '.' + rootDomain, // add a . in front so that subdomains are included
//       },
//     },
//   },

//   // Configure callback functions
//   callbacks: {
//     // Sign-in callback
//     async signIn({ user, account }) {
//       // Implement sign-in logic, e.g., create user in database
//       if (account?.provider === 'google') {
//         const { id, name, image } = user

//         try {
          
//         } catch (error) {
//           const existingUser = await fetchGraphQL({
//             document: GetAuthProviderDocument,
//             variables: {
//               uid: id,
//             },
//           })
  
//           if (!existingUser.data?.getAuthProvider?.uid) {
//             const newUser = await fetchGraphQL({
//               document: RegisterWithProviderDocument,
//               variables: {
//                 registerWithProviderInput: {
//                   uid: id,
//                   type: AuthProviderType.Google,
//                   image,
//                   name: name || '',
//                 },
//               },
//             })
//           }
          
//         }

//       }

//       return true
//     },
//     // Session callback
//     async session({ token, session }) {
//       // Customize session object based on token data
//       if (token) {
//         session.user = {
//           image: token.picture,
//           uid: (token.uid as string) || '',
//           email: token.email,
//           name: token.name,
//         }
//       }
//       return session
//       // ...
//     },
//   },

//   // Configure custom pages
//   pages: {
//     signIn: '/signIn',
//   },
// }

// export const getAuth = () => getServerSession(authOptions)


import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {
  AuthProviderType,
  GetAuthProviderDocument,
  LoginDocument,
  RegisterWithProviderDocument,
} from '../gql/generated'
import { fetchGraphQL } from '../fetch'
import * as jwt from 'jsonwebtoken'
import { JWT } from 'next-auth/jwt'

// Session expiration time (1 day)
const MAX_AGE = 24 * 60 * 60

// Ensure NEXTAUTH_URL is properly defined
const NEXTAUTH_URL = process.env.NEXTAUTH_URL ?? "http://localhost:3001"

// Secure cookies should only be enabled in production with HTTPS
const secureCookies = NEXTAUTH_URL.startsWith("https://")

// Extract hostname for setting cookies
const hostName = new URL(NEXTAUTH_URL).hostname

// Set root domain for cookies
const rootDomain = process.env.NODE_ENV === "production" ? "karthicktech.com" : "localhost"

// Format domain properly
const domain = hostName === "localhost" ? hostName : `.${rootDomain}`

console.log("Host Name:", hostName)
console.log("Cookie Domain:", domain)

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: { scope: 'openid profile' },
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        try {
          const { data, error } = await fetchGraphQL({
            document: LoginDocument,
            variables: { loginInput: { email: credentials.email, password: credentials.password } },
          })

          if (error || !data?.login.token) {
            throw new Error('Invalid credentials or user not found')
          }

          const { uid, image, name } = data.login.user
          return { id: uid, name, image, email: credentials.email }
        } catch (error) {
          console.error('Login error:', error)
          return null
        }
      },
    }),
  ],

  debug: process.env.NODE_ENV !== "production",

  session: {
    strategy: 'jwt',
    maxAge: MAX_AGE,
  },

  jwt: {
    maxAge: MAX_AGE,
    async encode({ token, secret }) {
      if (!token) throw new Error('Token is undefined')
      return jwt.sign({ ...token, exp: Math.floor(Date.now() / 1000) + MAX_AGE }, secret, { algorithm: 'HS256' })
    },
    async decode({ token, secret }) {
      if (!token) throw new Error('Token is undefined')
      try {
        return jwt.verify(token, secret, { algorithms: ['HS256'] }) as JWT
      } catch {
        return null
      }
    },
  },

  cookies: {
    sessionToken: {
      name: `${secureCookies ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: secureCookies,
        domain,
      },
    },
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const { id, name, image } = user

        try {
          const existingUser = await fetchGraphQL({
            document: GetAuthProviderDocument,
            variables: { uid: id },
          })

          if (!existingUser.data?.getAuthProvider?.uid) {
            await fetchGraphQL({
              document: RegisterWithProviderDocument,
              variables: {
                registerWithProviderInput: {
                  uid: id,
                  type: AuthProviderType.Google,
                  image,
                  name: name || '',
                },
              },
            })
          }
        } catch (error) {
          console.error('Google Sign-in Error:', error)
          return false
        }
      }
      return true
    },

    async session({ token, session }) {
      if (token) {
        session.user = {
          image: token.picture,
          uid: token.uid as string || '',
          email: token.email,
          name: token.name,
        }
      }
      return session
    },
  },

  pages: {
    signIn: '/signIn',
  },
}

export const getAuth = () => getServerSession(authOptions)
