import { gql } from "graphql-tag";

export const typeDefs = gql`
  input TodoInput {
    taskName: String
    description: String
  }
  type Todo {
    taskName: String
    description: String
    _id: ID
  }
  type User {
    clerk_id: ID
    first_name: String
    last_name: String
    emails: [String]
    image_url: String
    role: String
  }
  type Query {
    helloQuery: String
    userQuery: [User]
  }

  type Mutation {
    sayHello(name: String!): String
    addTodoMutation(todo: TodoInput): Todo
  }
`;
