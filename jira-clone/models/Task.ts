import { Task } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface ITask extends Task {}

const taskSchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: [
        "locked",
        "backlog",
        "in-progress",
        "pr",
        "rtodeploy",
        "rfortest",
      ],
      message: "{VALUE} is not a valid status",
    },
    default: "backlog",
  },
});

const TaskModel: Model<ITask> =
  mongoose.models.Task || mongoose.model("Task", taskSchema);

export default TaskModel;
