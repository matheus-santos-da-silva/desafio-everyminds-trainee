import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';

/* Pages */
import Home from './components/pages/Home';
import CreateProduct from './components/pages/CreateProduct';

/* Context */
import { ProductProvider } from './context/ProductContext';
import EditProduct from './components/pages/EditProduct';
import ProductDetails from './components/pages/ProductDetails';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Navbar/>
        <Message/>
        <Container >
          <Routes>
            <Route path='/products/edit/:id' element={<EditProduct/>}/>
            <Route path='/products/:id'element={<ProductDetails/>}/>
            <Route path='/products/create'element={<CreateProduct/>}/>
            <Route path='/'element={<Home/>}/>
          </Routes>
        </Container>
        <Footer/>
      </ProductProvider>
    </Router>
  );
}

export default App;
