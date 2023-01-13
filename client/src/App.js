import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

//pages and Components
import Home from './pages/HomePage'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
        <Header />
        <div className="Pages">

          <Routes>

            <Route path= "/" element ={<Home/>}/>

            
            
            </Routes>
      
        <main className="p-3">
          <Container>
           
          </Container>
        </main>
        <Footer />
        </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
