const { gql } = require("apollo-server-express");

const typeDefs = gql`


type User {
   
     _id:ID
    username:String
    email:String
    password:String
    token:String

}


input RegisterInput {
    username:String
    email:String
    password:String

}


input LoginInput {
    email:String
    password:String
}
type Auth {
    token: ID!
    user: User
  }

type Query {
    user: [User]
}

type Mutation{
    registerUser(registerInput:RegisterInput ):User
    loginUser(loginInput:LoginInput ):User
}
`;

module.exports = typeDefs;