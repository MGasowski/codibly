import { TextField } from "@mui/material";
import { useState } from "react";

const Searchbar = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    if (/^\d+$/.test(e.target.value) || e.target.value === "")
      setValue(e.target.value);
    props.onChange(e.target.value);
  };
  return (
    <>
      <TextField
        label="Find with id"
        variant="outlined"
        onChange={handleChange}
        value={value}
        fullWidth
        sx={{ marginBottom: 3, boxShadow: 3 }}
      />
    </>
  );
};

export default Searchbar;
