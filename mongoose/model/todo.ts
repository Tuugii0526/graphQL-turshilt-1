import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlenght: [10, "Хамгийн багадаа 10 урттай тайлбар оруулна уу"],
    required: true,
  },
});
const TodoModel = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export default TodoModel;

// addTask:

// taskName (String) => required
// description (String) => required ( must be at least 10 characters long )
// isDone (Boolean) => default to false
// priority (Int) => required (values 1-5)
// tags (Array of Strings) => optional, allows categorization
// createdAt (Date)
// updatedAt (Date)
// _id (MongoDB Object Id)

//updateTask

// This mutation updates an existing task's details using its taskId.
// Fields to update:
// taskName (String)
// description (String)
// priority (Int) => validate within range 1-5
// isDone (Boolean)
// tags (Array of Strings) => append or remove tags
