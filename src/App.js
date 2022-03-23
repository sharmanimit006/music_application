//import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import {Route,Routes} from 'react-router-dom';
import {Container} from '@material-ui/core';

function App() {
  return (
    <>
    <Container maxwidth='md'>
    <div className="app">
      <Routes>
      
        <Route exact path='/'  element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
        </Routes>
      
      
      
    </div>
    </Container>
    </>
  );
}

export default App;
