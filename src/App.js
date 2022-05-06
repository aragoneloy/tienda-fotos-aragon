import NavbarComp from './components/NavBar';
import { ItemListContainer } from './components/ItemLIstContainer/ItemListContainer';
import { ItemCount } from "./components/ItemCount/ItemCount";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  
  return(
      <>
        <NavbarComp />

        <ItemListContainer title='Hola mundo!'>
          <ItemCount initial='1'></ItemCount>
        </ItemListContainer>

        
      </>
      


  ) 
}

