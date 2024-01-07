<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

/* Pages */
import Home from './components/pages/Home';
import CreateProduct from './components/pages/CreateProduct';


function App() {
  return (
    <Router>
      <Navbar/>
      <Container >
        <Routes>
          <Route path='/edit' />
          <Route path='/create'element={<CreateProduct/>}/>
          <Route path='/'element={<Home/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
      
=======
function App() {
  return (
    <div className="App">
    <h1>Nunes Sports</h1>
    </div>
>>>>>>> e7ff186346a472861979951e674be1489c509c26
  );
}

export default App;
