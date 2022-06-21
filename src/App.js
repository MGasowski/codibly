import { Alert, AlertTitle, CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Datagrid from "./components/Datagrid";
import Searchbar from "./components/Searchbar";
import useApi from "./hooks/useApi";
import { QueryContext } from "./context/queriesContext";

function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [context, setContext] = useState({
    id: searchParams.get("id"),
    page: searchParams.get("page") ? searchParams.get("page") : 0,
  });

  // useEffect(() => {
  //   setContext({ ...context, page: 0 });
  //   const id = context.id !== "" ? `id=${context.id}` : "";
  //   navigate(`/?${id}`);
  // }, [context.id]);

  // useEffect(() => {
  //   setContext({ ...context, id: "" });
  //   navigate(`/?page=${context.page}`);
  // }, [context.page]);

  useEffect(() => {
    const search =
      context.id && context.id !== ""
        ? `?id=${context.id}`
        : `?page=${context.page}`;
    navigate({ pathname: `/`, search: search });
  }, [context]);

  const { loading, error, data } = useApi(
    `https://reqres.in/api/products?per_page=12`
  );

  return (
    <QueryContext.Provider value={[context, setContext]}>
      <Container sx={{ marginTop: 5 }}>
        <Searchbar />

        {loading || error ? (
          <CircularProgress />
        ) : (
          <Datagrid data={data.data} />
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
    </QueryContext.Provider>
  );
}

export default App;
