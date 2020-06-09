import { GraphQLObjectType, GraphQLString } from 'graphql'

export const HeadlineType = new GraphQLObjectType({
    name: 'Headline',
    description: 'Graphql Headline Object Type',
    fields: () => ({
        source: {
            type: new GraphQLObjectType({
                name: 'Source',
                fields: () => ({
                    id: {
                        type: GraphQLString
                    },
                    name: {
                        type: GraphQLString
                    }
                })
            })
        },
        id: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        url: {
            type: GraphQLString
        },
        urlToImage: {
            type: GraphQLString
        },
        publishedAt: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
    })
})