import React from "react";
import { Button } from "@mui/material";

let ButtonProps = {
  title: "string",
  variant: "contained",
  type: "string",
  fun: "string",
};

const Btn = ({ title, variant, type, fun } = ButtonProps) => {
  return (
    <div>
      <Button
        variant={variant}
        type={type}
        onClick={fun}
        sx={{ mt: "10px", width: "300px" }}
        disableRipple
      >
        {title}
      </Button>
    </div>
  );
};

export default Btn;
