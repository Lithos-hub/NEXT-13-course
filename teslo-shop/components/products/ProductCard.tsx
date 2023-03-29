import { FC, useMemo, useState } from "react";
import { Card, CardActionArea, CardMedia, Chip } from "@mui/material";
import { IProduct } from "../../interfaces/Product";

interface Props {
  product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return `/products/${product.images[Number(isHovered)]}`;
  }, [isHovered, product.images]);

  return (
    <div
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <Card>
        <CardActionArea>
          {product.inStock === 0 && (
            <Chip
              color="error"
              className="absolute top-2 left-2"
              label="Out of stock"
            />
          )}

          <CardMedia component="img" image={productImage} alt={product.title} />
        </CardActionArea>
      </Card>
      <div className="mt-1 fadeIn">
        <p className="font-bold">{product.title}</p>
        <p className="font-medium">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
