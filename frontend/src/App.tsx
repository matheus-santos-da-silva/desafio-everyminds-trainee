import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

/* Pages */
import Home from './components/pages/Home';
import CreateProduct from './components/pages/CreateProduct';

/* Context */
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Navbar/>
        <Container >
          <Routes>
            <Route path='/edit' />
            <Route path='/create'element={<CreateProduct/>}/>
            <Route path='/'element={<Home/>}/>
          </Routes>
        </Container>
        <Footer/>
      </ProductProvider>
    </Router>
  );
}

export default App;
