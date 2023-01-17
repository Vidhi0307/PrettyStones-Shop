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
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Success from "./pages/Success";
import UserOrder from "./pages/UserOrder";



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
              
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/order" element={<UserOrder />} />
              <Route exact  path="/products/:id" element={<Detail/>} />             
              <Route exact path="/success" element={<Success />} />
            </Routes>
            <Footer  />
          </Provider>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
