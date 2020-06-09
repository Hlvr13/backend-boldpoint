import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import queries from './fields/queries'


export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'Query',
        fields: queries
    })
})
