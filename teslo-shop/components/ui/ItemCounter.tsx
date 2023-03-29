import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { FC, useEffect, useState } from "react";

interface Props {
  productId?: string;
  quantity: number;
  max: number;
  onSelectedQuantity: (num: number, productId?: string) => void;
}

const ItemCounter: FC<Props> = ({
  quantity,
  onSelectedQuantity,
  max,
  productId,
}) => {
  const [counter, setCounter] = useState(quantity);

  const remove = () => {
    if (counter > 1) setCounter(counter - 1);
  };
  const add = () => {
    if (counter < max) setCounter(counter + 1);
  };

  useEffect(() => {
    onSelectedQuantity(counter, productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <>
      <IconButton onClick={() => remove()} disabled={counter === 0}>
        <Remove />
      </IconButton>
      <strong className="p-1 border px-3">{counter}</strong>
      <IconButton onClick={() => add()} disabled={counter === max}>
        <Add />
      </IconButton>
    </>
  );
};

export default ItemCounter;
