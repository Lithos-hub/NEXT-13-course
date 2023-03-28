import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { isValidObjectId } from "mongoose";
import { IProduct } from "@/interfaces/Product";
import { Product } from "@/models";

type Data =
  | {
      message: string;
    }
  | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "PUT":
      return updateProduct(req.body, res);

    default:
      return res
        .status(400)
        .json({ message: "Bad request. Endpoint do not exist" });
  }
}

const updateProduct = async (
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
    const updateResponse = await Product.findByIdAndUpdate(
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
