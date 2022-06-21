import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", flex: 0.3 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "year", headerName: "Year", flex: 1 },
];

const Datagrid = (props) => {
  const data = props.filter
    ? props.data.filter((el) => el.id == props.filter)
    : props.data;

  const sx = {};
  data &&
    data.forEach(
      (el) =>
        (sx[`.MuiDataGrid-cell--${el.id}`] = { backgroundColor: el.color })
    );
  if (!data) return <CircularProgress />;
  return (
    <Box sx={{}}>
      <DataGrid
        autoHeight
        rows={data}
        columns={columns}
        sx={{
          boxShadow: 3,
          ...sx,
        }}
        getRowClassName={(params) => `MuiDataGrid-cell--${params.row.id}`}
        rowsPerPageOptions={[5]}
        pageSize={5}
      />
    </Box>
  );
};

export default Datagrid;
