import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


//pages and Components
import Home from "./pages/HomePage";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Login from "./pages/Login"
import Footer from "./components/Footer";
import Cart from "./components/Cart";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
        <Header />
        <div className="Pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
          </Routes>

          <main className="p-3">
            <Container></Container>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
    </ApolloProvider>
  );
}

export default App;
