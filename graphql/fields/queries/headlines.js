import { GraphQLList, GraphQLString } from 'graphql'
import { HeadlineType } from '../../types/headlines'

export const getAllHeadlines = {
    type: new GraphQLList(HeadlineType),
    resolve: (root, args, { newsApi }) => {
        return newsApi.v2.topHeadlines()
            .then(response => response.articles)
            .catch(err => new Error(err))
    }
}

export const getEnHeadlines = {
    type: new GraphQLList(HeadlineType),
    resolve: (root, args, { newsApi }) => {
        return newsApi.v2.topHeadlines({
            sources: 'bbc-news',
            //q: 'bitcoin',
            //category: 'business',
            //language: 'en',
            //country: 'us'
        })
            .then(response => response.articles)
            .catch(err => new Error(err))
    }
}

export const getCustomHeadlines = {
    type: new GraphQLList(HeadlineType),
    args: {
        sources: {
            type: GraphQLString
        },
        q: {
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
    },
    resolve: (root, args, { newsApi }) => {
        const filter = {}
        for (const key in args) {
            if (args[key]) filter[key] = args[key]
        }

        return newsApi.v2.topHeadlines(filter)
            .then(response => response.articles)
            .catch(err => new Error(err))
    }
}