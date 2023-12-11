import { TextField } from "@mui/material";
import React from "react";
let TextFieldProps = {
  id: "string",
  label: "string",
  type: "string",
  placeholder: "string",
  fun: "string",
};
const TextFieldBOX = ({
  id,
  label,
  type,
  placeholder,
  fun,
} = TextFieldProps) => {

  return (
    <div>
      <TextField
        sx={{ width: "300px" }}
        id={id}
        label={label}
        type={type}
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={placeholder}
        onChange={fun}
      />
    </div>
  );
};

export default TextFieldBOX;
