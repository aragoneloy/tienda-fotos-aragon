import NavbarComp from './components/NavBar';
import { ItemListContainer } from './components/ItemLIstContainer/ItemListContainer';
import { ItemCount } from "./components/ItemCount/ItemCount";
import { item } from "./components/Item/Item";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  
  const peticionItem = []
  return(
      <>
        <NavbarComp />

        <ItemListContainer data={peticionItem} title='Hola mundo!'></ItemListContainer>
        <ItemCount initial='1' stock={10}></ItemCount>
        
      </>
      


  ) 
}

