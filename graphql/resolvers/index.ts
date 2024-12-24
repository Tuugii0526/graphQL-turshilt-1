import { addTodoMutation } from "./mutations/addTodo";
import { sayHello } from "./mutations/say-hello";
import { helloQuery } from "./queries/hello";
import { userQuery } from "./queries/user";

export const resolvers = {
  Query: {
    helloQuery,
    userQuery,
  },
  Mutation: {
    sayHello,
    addTodoMutation,
  },
};
