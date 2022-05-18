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
import Error from './views/Error';
import ItemDetailView from './views/ItemDetailView/ItemDetailView';

const App = () => {
  

  
  return (
    

    <Router>
     <>
        <NavbarComp />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/detail/:id' element={<ItemDetailView />}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        
      </>
    </Router> 
   );
}
 
export default App;

