import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Contactus() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{ color:"red" }}>Spotify</Navbar.Brand>
    <Nav className="me-auto">
      <Link to='/musiclist'><Nav.Link href="#home">Home</Nav.Link></Link>
      <Link to='/playlist'> <Nav.Link href="#playlist">playlist</Nav.Link></Link>
      
     
      <Link to='/list'><Nav.Link href="list">list</Nav.Link></Link>
      <Nav.Link href="#contact">contact us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
    <div class="page-heading contact-heading">
    <div class="container">
        <div class="row">
        <div class="col-md-12">
            <div class="text-content">
                <h4>HOW CAN WE HELP?</h4>
                <h2>let's get in touch and our expert support team will answer all your questions</h2>


            </div>

            </div>


        </div>


        </div>


    </div>
    <div class="find-us">
    <div class="container">

        <div class="row">
            <div class="col-md-12">
            <div class="section-heading">
                <h2>Location On Maps</h2>
                </div>


            </div>



        </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-8">
            <div id="map">
            <iframe title="embedsPage" className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28693854.703923773!2d77.20468480000001!3d28.6097408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1616141809754!5m2!1sen!2sin"
        allowfullscreen></iframe>

      </div>

            </div>
            <div class="col-md-4">
                <div class="left-content">
                    <h4>About Our Office</h4>
                    <p>Welcome to our company office.We have designed Our Offices keeping the best working environments in our mind. We believe in both “no-walls” and the “Compartment” environment. When it comes to working altogether so the employees can speak freely with one another. Also if you want the compartment or cabin all by yourself, we have all the things you need.</p>

                </div>

            </div>

        </div>
        <div class="send-message">
    <div class="container">
        <div class="row">
        <div class="col-md-12">
            <div class="section-heading">
            <h4>Send Message</h4>

            </div>

            </div>

        </div>
        </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <div class="contact-form">
                    <form>
                        <div class="form-row">
                            <div class="col-md-12 form-group">
                                <input type="text" placeholder="Full Name" class="form-control"/>


                            </div>


                        </div>
                          <div class="form-row">
                            <div class="col-md-12 form-group">
                                <input type="text" placeholder="E-mail address" class="form-control"/>


                            </div>


                        </div>
                          <div class="form-row">
                            <div class="col-md-12 form-group">
                                <input type="text" placeholder="Subject" class="form-control"/>


                            </div>


                        </div>
                          <div class="form-row">
                            <div class="col-md-12 form-group">
                                <textarea placeholder="Your Message" class="form-control"></textarea>


                            </div>


                        </div>
                          <div class="form-row">
                            <div class="col-md-12 form-group">
                                <button type="submit"  class="filled-button">Send Message</button>
                            </div>
                        </div>

                    </form>


                </div>

            </div>


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
  )
}
