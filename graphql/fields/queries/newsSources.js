import { GraphQLList, GraphQLString } from 'graphql'
import { NewsSourceType } from '../../types/newsSources'

export const getAllSources = {
    type: new GraphQLList(NewsSourceType),
    resolve(root, args, { newsApi }) {
        return newsApi.v2.sources()
            .then(response => response.sources)
            .catch(err => new Error(err))
    }
}

export const getEnSources = {
    type: new GraphQLList(NewsSourceType),
    resolve(root, args, { newsApi }) {
        return newsApi.v2.sources({
            language: 'en',
        })
            .then(response => response.sources)
            .catch(err => new Error(err))
    }
}

export const getCustomSource = {
    type: new GraphQLList(NewsSourceType),
    args: {
        category: {
            name: 'category',
            type: GraphQLString
        },
        language: {
            name: 'language',
            type: GraphQLString
        },
        country: {
            name: 'country',
            type: GraphQLString
        },
    },
    resolve: (root, args, { newsApi }) => {
        const filter = {}
        for (const key in args) {
            if (args[key]) filter[key] = args[key]
        }
        return newsApi.v2.sources(filter)
            .then(response => response.sources)
            .catch(err => new Error(err))
    }
}