import {
  ApolloClient
} from 'apollo-client'
import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'

const COCKPIT_API = 'https://barbaresco-admin.w-start.com.ua/api/graphql/query?token=d5993d83d44040c37de0414695e82e'

export default new ApolloClient({
  link: new HttpLink({
    uri: COCKPIT_API
  }),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})
