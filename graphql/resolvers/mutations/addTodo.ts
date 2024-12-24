import { TTodo } from "@/lib/types";
import TodoModel from "@/mongoose/model/todo";

export const addTodoMutation = async (
  _: unknown,
  { todo }: { todo: TTodo }
) => {
  try {
    const todoInstance = new TodoModel(todo);
    await todoInstance.save();
    return todoInstance;
  } catch (error) {
    return "";
  }
};
