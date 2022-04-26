import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonToolbar, NavLink } from "react-bootstrap";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from "@material-ui/core";

const ShowProduct = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkmode, setDarkmode] = useState({
    color:"black",
    backgroundColor:"white"
  })
  //const [fileList, setFileList] = useState([]);
  //const fileTypes = ["mp3"];
  const navigate = useNavigate();
  console.log(product, "pro");

  const getProductData = async () => {
    await axios
      .get("http://practical.esmsys.in/api/product/list")
      .then((res) => setProduct(res.data.data, "ressss"));
  };

  useEffect(() => {
    getProductData();
  },[product]);

  const deleteHandler = async (id) => {
    await axios.delete(`http://practical.esmsys.in/api/product/${id}`);
    // getProductData();
  };
  const addPRoute = () => {
    navigate("/add");
  };
  {/** 
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
        onFileChange(updatedList);
        
    }
}
const onFileChange = (files) => {
  console.log(files);
}
**/}
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
    <Link to="/musiclist"><Nav.Link href="#home">Home</Nav.Link></Link>
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
    <div className="container">
      
      <input 
      className="box"
        type="text"
        placeholder="Search Here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* <NavLink to="/add" className="btn btn-primary"> Add Product</NavLink> */}
      <div className="mt-2 mb-2">
        <button className="btn btn-primary" onClick={addPRoute}>
          Add Song
        </button>
      </div>
      <table className="table">
        <thead>
          <tr className="">
            <th scope="col">S.No</th>
            <th scope="col">Song Name</th>
            <th scope="col"> Song Duration</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {product
            .filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.ProductName.toLowerCase().includes(
                  searchTerm.toLowerCase()
                )
              ) {
                return item;
              }
            })
            .map((item, id) => {
              return (
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>{item.ProductName}</td>
                  <td>{item.ProductPrice}</td>
                  <td className="d-flex justify-content-between ">
                    
                    <NavLink>
                      <button className="btn btn-success" >Upload</button>
                      
                
                
                
                {/** 
              <div>
            <button className="btn btn-success"><div className="amit">Upload songs
                <input type="file" value="" accept=".mp3" onChange={onFileDrop}  types={fileTypes} className="hidden" />
                </div>
            </button>
            </div>
              **/}
              </NavLink>
            

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(item.ProductID)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    
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
  );
};

export default ShowProduct;
