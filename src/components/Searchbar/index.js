import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { QueryContext } from "../../context/queriesContext";

const Searchbar = (props) => {
  const [context, setContext] = useContext(QueryContext);

  const handleChange = (e) => {
    if (/^\d+$/.test(e.target.value) || e.target.value === "")
      setContext({ ...context, id: e.target.value });
  };
  return (
    <>
      <TextField
        label="Find with id"
        variant="outlined"
        onChange={handleChange}
        value={context.id}
        fullWidth
        sx={{ marginBottom: 3, boxShadow: 3 }}
      />
    </>
  );
};

export default Searchbar;
