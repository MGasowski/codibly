import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const mock = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "XGrid", col2: "is Awesome" },
  { id: 3, col1: "Material-UI", col2: "is Amazing" },
  { id: 4, col1: "Hello", col2: "World" },
  { id: 5, col1: "XGrid", col2: "is Awesome" },
  { id: 6, col1: "Material-UI", col2: "is Amazing" },
];

const columns = [
  { field: "id", flex: 0.3 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "year", headerName: "Year", flex: 1 },
];

const Datagrid = (props) => {
  const data = props.filter
    ? props.data.filter((el) => el.id == props.filter)
    : props.data;

  return (
    <Box sx={{}}>
      <DataGrid
        autoHeight
        rows={props.data ? data : mock}
        columns={columns}
        sx={{ boxShadow: 3 }}
        //   getRowClassName={(params) => `background: ${params.row.color}`}
        rowsPerPageOptions={[5]}
        pageSize={5}
        getRowClassName={(params) => ""}
      />
    </Box>
  );
};

export default Datagrid;
