import { Alert, AlertTitle, CircularProgress, Container } from "@mui/material";
import { useState } from "react";
import Datagrid from "./components/Datagrid";
import Searchbar from "./components/Searchbar";
import useApi from "./hooks/useApi";

function App() {
  const [filter, setFilter] = useState("");
  const { loading, error, data } = useApi(
    `https://reqres.in/api/products?per_page=12`
  );

  return (
    <Container sx={{ marginTop: 5 }}>
      <Searchbar onChange={(filter) => setFilter(filter)} />

      {loading || error ? (
        <CircularProgress />
      ) : (
        <Datagrid data={data.data} filter={filter} />
      )}

      {error ? (
        <Alert
          severity="error"
          sx={{ position: "absolute", bottom: "10%", left: 0, zIndex: 100 }}
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        ""
      )}
    </Container>
  );
}

export default App;
