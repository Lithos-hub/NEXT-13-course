import { FC, useMemo, useState } from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { IProduct } from "../../interfaces/Product";
import Link from "next/link";
import ItemCounter from "../ui/ItemCounter";

interface Props {
  product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return `products/${product.images[Number(isHovered)]}`;
  }, [isHovered, product.images]);

  return (
    <div
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <Link href={`/product/${product.slug}`} passHref prefetch>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={productImage}
              alt={product.title}
            />
          </CardActionArea>
        </Card>
      </Link>
      <div className="mt-1 fadeIn">
        <p className="font-bold">{product.title}</p>
        <p className="font-medium">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
