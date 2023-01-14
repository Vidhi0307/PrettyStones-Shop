import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";



//pages and Components
import Home from './pages/HomePage'
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import  Cart  from './components/Cart';





function App() {
  return (
  
      <div className="App">
        <BrowserRouter>
        <Header />
        <div className="Pages">
          <Routes>
            <Route path= "/" element ={<Home/>}/>
            <Route path ="/cart" element ={<Cart/>}/>
          </Routes>
      
        <main className="p-3">
          <Container>
           
          </Container>
        </main>
        <Footer />
        </div>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
