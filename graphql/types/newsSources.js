import { GraphQLObjectType, GraphQLString } from 'graphql'

export const NewsSourceType = new GraphQLObjectType({
    name: 'News_Source',
    description: 'Graphql news source Object Type',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        url: {
            type: GraphQLString
        },
        category: {
            type: GraphQLString
        },
        language: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
    })
}) 