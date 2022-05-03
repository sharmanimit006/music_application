import MaterialTable from 'material-table';
import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from "@material-ui/core";
import NightlightIcon from '@mui/icons-material/Nightlight';



//import React from 'react'

export default function Playlist() {
  const [darkmode, setDarkmode] = useState({
    color:"black",
    backgroundColor:"white"
  })
  
const darkModeTheme = () => {
  if(darkmode.color == 'black'){
    setDarkmode({
      color:"white",
      backgroundColor:"black",
    })
  }
}
const lightModeTheme = () => {
  if(darkmode.color == 'white'){
    setDarkmode({
      color:"black",
      backgroundColor:"white"
    })
  }
}



  return (
    <>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{ color:"red" }}>Spotify</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Link to='/playlist'><Nav.Link href="#playlist">Playlist</Nav.Link></Link>
      
      <Link to='/list'><Nav.Link href="#list">list</Nav.Link></Link>
      <Link to='/contactus'><Nav.Link href="#contact">contact us</Nav.Link></Link>
    </Nav>
    </Container>
  </Navbar>
  <div className="darkMode">
    <IconButton  className="icons" onClick={darkModeTheme}>
    <NightlightIcon/>
    </IconButton>
    <IconButton  className="icons">
    <LightModeIcon style={{color:"white"}}onClick={lightModeTheme}/>
    </IconButton>
    </div>
    <div className='mtable'style={darkmode}>
     <MaterialTable
     style={darkmode}
      title="MUSIC LIST"
      columns={[
        { title: 'Song Name', field: 'name' },
        { title: 'Singer Name', field: 'singername' },
        { title: 'Duration', field: 'duration', type: 'numeric' },
        {title:'',field:'delete',type:'string'},
        {/**title:'Delete',field:'delete',type:'string'**/},
        
        
        
        
        
        
      ]}
      data={[
        { name: 'Army', singername: 'ellie goulding', duration: 1,delete:"nimit",delete: <DeleteIcon/> },
        { name: 'Blank Space', singername: 'taylor swift', duration: 2,delete: <DeleteIcon/> },
        {name: 'closure', singername: 'rock',duration: 3,delete: <DeleteIcon/> },
        {name: 'burn', singername: 'ellie',duration: 4,delete: <DeleteIcon/> },
        {name: 'Dark horse', singername: 'ketty perry',duration: 2,delete: <DeleteIcon/>},
        {name: 'waka waka', singername: 'shakira',duration: 3,delete: <DeleteIcon/>},
        {name: 'take me home', singername: 'jess glynn',duration: 2,delete: <DeleteIcon/>},
        {name: 'she wolf', singername: 'shakira',duration: 1,delete: <DeleteIcon/>},
        
      ]}        
      options={{
        search: true
      }}
      

    />
    </div>
    <DeleteIcon/>
    <Container>
    <Button color="primary" variant="contained" onClick={()=>console.log("you clicked me")}>
      delete
      </Button>
      </Container>

    
    
    
    
    
    
    </>
  )
}
