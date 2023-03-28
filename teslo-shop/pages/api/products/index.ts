import type { NextApiRequest, NextApiResponse } from "next";
import { SHOP_CONSTANTS, db } from "@/database";
import { Product } from "@/models";
import { IProduct } from "@/interfaces";

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
    case "GET":
      return getProducts(req, res);

    case "POST":
      return postProduct(req.body, res);

    default:
      return res
        .status(400)
        .json({ message: "Bad request. Endpoint do not exist" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = "all" } = req.query;

  let condition = {};

  if (gender !== "all" && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = { gender };
  }

  await db.connect();

  const products = await Product.find(condition)
    .select("title images price inStock slug -_id")
    .lean();

  await db.disconnect();

  res.status(200).json(products);
};

const postProduct = async (
  data: Record<string, unknown>,
  res: NextApiResponse<Data>
) => {
  const { description, status } = data;

  if (!description || !status)
    res.status(400).json({ message: "No description or status provided" });

  const newProduct = new Product({
    description,
    status,
    createdAt: Date.now(),
  });

  try {
    await db.connect();
    await newProduct.save();
    await db.disconnect();

    res.status(200).json(newProduct);
  } catch (error) {
    await db.disconnect();
    console.log("Error when POST Product");
    return res
      .status(500)
      .json({ message: "Something went wrong in the Database" });
  }
};
