
import './App.css'
import { CreateEmployee } from './component/CreateEmployee/CreateEmployee';
import Header from './component/Header/Header';
import ViewEmployee from './component/ViewEmployee/ViewEmployee';

function App() {

  return (
    <>
     <Header/>
     <CreateEmployee/>
     <ViewEmployee/>
    </>
  )
}

export default App;
