import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { QueryContext } from "../../context/queriesContext";

const columns = [
  { field: "id", flex: 0.3 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "year", headerName: "Year", flex: 1 },
];

const Datagrid = (props) => {
  const [context, setContext] = useContext(QueryContext);

  const data = context.id
    ? props.data?.filter((el) => el.id == context.id)
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
        page={Number(context.page)}
        onPageChange={(page) => setContext({ ...context, page: page })}
      />
    </Box>
  );
};

export default Datagrid;
