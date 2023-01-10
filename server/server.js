const express =require ('express');

//importing Apollo Server Class

const {ApolloServer}   =require('apollo-server-express') ;

const app=express();

const {typeDefs,resolvers}= require('./schema');


const server =new ApolloServer({typeDefs,resolvers}
);

server.applyMiddleware({app});
app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
})

