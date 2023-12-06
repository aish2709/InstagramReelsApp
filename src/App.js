import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/Feed';
// import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
   <AuthProvider>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Feed/>}/>
    {/* <Route path='/' element={<PrivateRoute component={Feed}/>}/> */}
    {/* <Route exact path="/" element={isauth ? <Feed/> : <Navigate to="/Login"  />}/> */}

    </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
