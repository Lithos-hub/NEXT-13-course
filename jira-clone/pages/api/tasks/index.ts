import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { Task } from "@/models";
import type { ITask } from "@/models/Task";

type Data =
  | {
      message: string;
    }
  | ITask[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getTasks(res);

    case "POST":
      return postTask(req.body, res);

    default:
      return res
        .status(400)
        .json({ message: "Bad request. Endpoint do not exist" });
  }
}

const getTasks = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const task = await Task.find().sort({ createdAt: "ascending" });

  await db.disconnect();

  res.status(200).json(task);
};

const postTask = async (
  data: Record<string, unknown>,
  res: NextApiResponse<Data>
) => {
  const { description, status } = data;

  if (!description || !status)
    res.status(400).json({ message: "No description or status provided" });

  const newTask = new Task({
    description,
    status,
    createdAt: Date.now(),
  });

  try {
    await db.connect();
    await newTask.save();
    await db.disconnect();

    res.status(200).json(newTask);
  } catch (error) {
    await db.disconnect();
    console.log("Error when POST task");
    return res
      .status(500)
      .json({ message: "Something went wrong in the Database" });
  }
};
