import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import apollo from "./lib/apollo";

const App = () => (
  <ApolloProvider client={apollo}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);
export default App;
