import { ISizes } from "@/interfaces";
import { Button } from "@mui/material";
import React, { FC } from "react";

interface Props {
  selectedSize: string;
  sizes: ISizes[];
  onSelection: Function;
}

const SizeSelector: FC<Props> = ({ selectedSize, sizes, onSelection }) => {
  return (
    <ul className="flex flex-wrap gap-1 justify-center">
      {sizes.map((size, i) => (
        <li key={i}>
          <Button
            className={selectedSize === size ? "bg-blue-500 text-white" : ""}
            onClick={() => onSelection(size)}
          >
            {size}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SizeSelector;
