import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import Layout from "./components/templates/Layout";
import PageContent from "./components/templates/PageContent";
import { store } from "./redux/store";
import { movieApi } from "./redux/slices/movieApi";

function App() {
  return (
    <>
      <ApiProvider api={movieApi}>
        <Provider store={store}>
          <Layout>
            <PageContent />
          </Layout>
        </Provider>
      </ApiProvider>
    </>
  );
}

export default App;
