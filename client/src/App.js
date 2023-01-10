import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='p-3'><Container>
        <h1>Welcome to Pretty Stones -Jewellery shop
          </h1>
          </Container>
        </main>
      <Footer/>
         </div>
  );
}

export default App;
