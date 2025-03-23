import { gql } from "apollo-server-express"

const messageSchema = gql`
    type Message {
        id: ID!
        text: String!
        user: User!
        timestamp: Float
    }

    extend type Query {
        messages(cursor: ID): [Message!]!
        message(id: ID!): Message!
    }

    extend type Mutation {
        createMessage(text: String!, userId: ID!): Message!
        updateMessage(id: ID!, text: String!, userId: ID!): Message!
        deleteMessage(id] ID!, userId: ID!): ID!
    }
`
export default messageSchema