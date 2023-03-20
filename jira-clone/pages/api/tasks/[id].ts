import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { Task } from "@/models";
import type { ITask } from "@/models/Task";
import { isValidObjectId } from "mongoose";

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
    case "PUT":
      return updateTask(req.body, res);

    default:
      return res
        .status(400)
        .json({ message: "Bad request. Endpoint do not exist" });
  }
}

const updateTask = async (
  data: Record<string, unknown>,
  res: NextApiResponse<Data>
) => {
  const { _id, description, status } = data;

  if (!description || !status || !_id)
    res.status(400).json({ message: "No description, status or id provided" });

  const task = {
    ...data,
  };

  try {
    await db.connect();
    const updateResponse = await Task.findByIdAndUpdate(
      {
        _id,
      },
      task,
      {
        runValidators: true,
        new: true,
      }
    );

    res.status(200).json(updateResponse);
  } catch (error) {
    console.log("Error when PUT task");
    return res
      .status(500)
      .json({ message: "Something went wrong in the Database" });
  } finally {
    await db.disconnect();
  }
};
