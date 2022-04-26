import { green, red } from '@material-ui/core/colors';
import React from 'react'
//import {Navigate} from "react-router-dom";
//import Navbar from 'react-bootstrap/Navbar'
//import {Container} from '@material-ui/core';
//import Nav from 'react-bootstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';
//import Footer from './Footer'


 function Music_list() {
    
     

    const list=[
        {song_name:'burn' ,singer:'ellie goulding'},
        {song_name:'cheap thrills', singer:'lady gaga'},
        {song_name:'army' ,singer:'amit solanki'},
        {song_name:'blank space' ,singer:'taylor swift'},
        {song_name:'Move On' ,singer:'kristin stewart'}
    ]
  return (
    <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{ color:"red" }}>Spotify</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Link to='/playlist'> <Nav.Link href="#playlist">playlist</Nav.Link></Link>
      
      
      <Link to='/list'><Nav.Link href="#list">list</Nav.Link></Link>
      <Link to='/contactus'><Nav.Link href="#contact">contact us</Nav.Link></Link>
    </Nav>
    </Container>
  </Navbar>
  
  <div style={{ display: 'block', width: 1150 , padding: 30 , }}>
      
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="img2.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>LET'S PLAY MUSIC</h3>
            <p>Music is the great uniter</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="img3.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2><b style={{ color: '#f40202'}}>Music is life itself.</b></h2>
           <h3> <b style={{ color: '#f40202'}}>The only truth is music</b></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  
  
  
    <div className='app'>
        <center>
        <h1>list of songs</h1>
        <table className='tabble'  >
            <tbody >
                <tr>
                    <th >song Name</th>&nbsp; &nbsp;
                    <th > singer Name</th>
                </tr>
                
                  {
                      list.map((item,i)=>
                      <tr key={i}>
                        
                          <td >{item.song_name}</td>&nbsp; &nbsp; &nbsp;
                          <td >{item.singer}</td>
                          
                          
                          
                      </tr>
                      )
                  }

                    
                
            
            </tbody>
        </table>
        </center>


    </div>
    <Link to="/footer">footer</Link>
    <footer>
      <div class="containr">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Spotify.com </a>
            </div>
          </div>
        </div>

      </div>



    </footer>
    
    
    
    
    </>
  )
}
export default Music_list;
