import { db } from "@/database";

import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../interfaces/Product";

type Data = {
  message: string | IProduct[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);

    default:
      return res
        .status(400)
        .json({ message: "Bad request. Endpoint do not exist" });
  }
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  let { q = "" } = req.query;

  if (!q.length) {
    return res.status(400).json({
      message: "Invalid query param",
    });
  }

  q = q.toString().toLocaleLowerCase();

  await db.connect();

  const products = await Product.find({
    $text: { $search: q },
  })
    .select("title images inStock price slug -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
};
