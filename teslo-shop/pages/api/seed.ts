import { db } from "@/database";
import { initialData } from "@/database/products";

import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "Access denied" });
  }

  console.log("Response: ", res);

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(initialData.products);

  await db.disconnect();

  res.status(200).json({ message: "Process successfully completed" });
}
