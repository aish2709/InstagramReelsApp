import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import { BrowserRouter , Switch,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
