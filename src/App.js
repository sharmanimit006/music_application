//import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Music_list from './Music_list'
import {Route,Routes} from 'react-router-dom';
import {Container} from '@material-ui/core';
import Contactus from './Contactus';
import List from './List';
import Add_song from './Add_song';
import Playlist from './Playlist';



function App() {
  return (
    <>
    <Container maxwidth='md'>
    <div className="app">
      <Routes>
      
        <Route exact path='/'  element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path='/musiclist' element={<Music_list/>}/>
        <Route exact path='/contactus' element={<Contactus/>}/>
        <Route exact path='/list' element={<List/>}/>
        <Route exact path='/add' element={<Add_song/>}/>
        <Route exact path='/playlist' element={<Playlist/>}/>

        

        </Routes>
        
        
      
      
      
    </div>
  </Container>
    
    
    
    </>
  );
}

export default App;
