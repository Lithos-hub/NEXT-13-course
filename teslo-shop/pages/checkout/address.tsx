import { ShopLayout } from "@/components/layouts";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <ShopLayout
      title="Teslo Shop | Checkout address"
      pageDescription="Confirm order address"
    >
      <section>
        <h1 className="text-4xl font-bold mb-10">Address</h1>
        <div className="grid grid-cols-3 gap-5">
          <TextField label="Name" variant="filled" fullWidth />
          <TextField label="Last name" variant="filled" fullWidth />
          <TextField label="Address 1" variant="filled" fullWidth />
          <TextField label="Address 2" variant="filled" fullWidth />
          <TextField label="Zip code" variant="filled" fullWidth />
          <TextField label="City" variant="filled" fullWidth />
          <div>
            <label>Country</label>
            <Select label="Country" variant="filled" fullWidth value={1}>
              <MenuItem value={1}>Spain</MenuItem>
            </Select>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <Button className="bg-blue-500 px-20 rounded-full text-white hover:text-black">
            Review order
          </Button>
        </div>
      </section>
    </ShopLayout>
  );
};

export default index;
