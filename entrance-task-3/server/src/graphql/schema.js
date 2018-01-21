import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './typeDefs'
import resolvers from './resolvers/index'

export default makeExecutableSchema({ typeDefs, resolvers })

