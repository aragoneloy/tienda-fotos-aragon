import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//REACT ROUTER DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//COMPONENTS
import NavbarComp from './components/NavBar/navBar';


//VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Error from './views/Error/Error';
import ItemDetailView from './views/ItemDetailView/ItemDetailView';
import { ItemsProvider } from './Context/ItemContext';
import { CartProvider } from './Context/CartContext';
import Cart from './components/cart/Cart';
import Category from './views/Category/Category';
import CheckOut from './views/CheckOut/CheckOut';
const App = () => {
  

  
  return (
    
    <ItemsProvider>
      <CartProvider>
        <Router>
        <>
            <NavbarComp />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                
                <Route path='/detail/:id' element={<ItemDetailView />}/>
                <Route path='/category/:category' element={<Category />}/>
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<CheckOut />} />
                <Route path='*' element={<Error/>}/>
            </Routes>
            
          </>
        </Router> 
      </CartProvider>
    </ItemsProvider>
   );
}
 
export default App;

