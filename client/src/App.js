import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";

import store from "./utils/store";

//pages and Components
import Home from "./pages/HomePage";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";

import { LOGIN } from "./utils/mutations";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Provider store={store}>
          <Header /> 
           <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element={<CheckoutPage />} /> 
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/success" element={<Success />} />
            </Routes>
            <Footer />
          </Provider>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
