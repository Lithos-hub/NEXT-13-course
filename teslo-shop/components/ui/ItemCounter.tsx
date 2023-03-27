import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

type Props = {};

const ItemCounter = (props: Props) => {
  return (
    <>
      <IconButton>
        <Remove />
      </IconButton>
      <strong className="p-2 border px-5">5</strong>
      <IconButton>
        <Add />
      </IconButton>
    </>
  );
};

export default ItemCounter;
