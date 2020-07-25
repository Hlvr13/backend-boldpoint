/* SERVER */
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser' // Used for REST API, not using it 

/* GRAPHQL */
import expressGraphql from 'express-graphql'
import schema from './graphql'

/* THIRD PARTY */
import NewsAPI from 'newsapi'

/* EXTRAS */
import dotenv from 'dotenv'
dotenv.config()

/* Variables and Instances */
const PORT = process.env.PORT || 5000 // Configuration for heroku deployment
const newsApi = new NewsAPI(process.env.NEWS_API_KEY) // News API
const jsonParser = bodyParser.json()


const app = express()
app.use(cors())
app.use(jsonParser)

/* End Points */
// Basic verification
app.get('/', (req, res) => {
    res.send('Server working')
})

//Testing github action commit
// Graphql endpoint
// TODO: Personally, Eventhough it's really simple to use, I don't like this library because of the 
// TODO: lack of configuration for subscription. Tried ApolloServer but got an error while importing the library
// TODO: and because of time, opted for this one. 
app.use('/graphql', expressGraphql((req, res) => ({
    schema,
    graphiql: true,
    pretty: true,
    context: { newsApi }
})))

app.listen(PORT, () => {
    console.log(`Port working on port: ${PORT}`)
})

