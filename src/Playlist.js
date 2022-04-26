import MaterialTable from 'material-table';
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';



//import React from 'react'

export default function Playlist() {
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
     <MaterialTable
      title="MUSIC LIST"
      columns={[
        { title: 'Song Name', field: 'name' },
        { title: 'Singer Name', field: 'singername' },
        { title: 'Duration', field: 'duration', type: 'numeric' },
        {/**title:'Delete',field:'delete',type:'string'**/},
        
        
        
        
        
        
      ]}
      data={[
        { name: 'Army', singername: 'ellie goulding', duration: 1,delete:"nimit" },
        { name: 'Blank Space', singername: 'taylor swift', duration: 2, },
        {name: 'closure', singername: 'rock',duration: 3, },
        {name: 'burn', singername: 'ellie',duration: 4, },
        {name: 'Dark horse', singername: 'ketty perry',duration: 2},
        {name: 'waka waka', singername: 'shakira',duration: 3},
        {name: 'take me home', singername: 'jess glynn',duration: 2},
        {name: 'she wolf', singername: 'shakira',duration: 1},
        
      ]}        
      options={{
        search: true
      }}
      

    />
    <DeleteIcon/>
    <Container>
    <Button color="primary" variant="contained" onClick={()=>console.log("you clicked me")}>
      delete
      </Button>
      </Container>

    
    
    
    
    
    
    </>
  )
}
