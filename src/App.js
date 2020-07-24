import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title:'Clive Ying',

      headerLink:[
        {title:'Home', path:'/'},
        {title:'About', path:'/about'},
        {title:'Contact', path: '/contact'}
      ],

      home: {
        title: 'Welcome to Clive\'s Website',
        subTitle:'I am a growing junior front-end developer!',
        text:'Checkout my profolios, feel free to contact me for more information'

      },
      about: {
        title: 'About me',
        
      },
      contact: {
        title: 'Nice to hear from you'
        

      }
    }
  }

  render(){
    return(
      
     
      <Router>
        <Container calssName = "p-0" fluid={true}>

          <Navbar className = "border-bottom" bg = "transparent" expand = "lg">
            <Navbar.Brand>Profolios of Clive</Navbar.Brand>

            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle"/>
              <Navbar.Collapse id = "navbar-toggle">
                <Nav className = "auto">
                  <Link className = "nav-link" to = "/">Home</Link>
                  <Link className = "nav-link" to = "/about">About</Link>
                  <Link className = "nav-link" to = "/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>

          {/* This routing section renders pages from pages folder */}
          <Route path="/" exact render={()=> 
              <HomePage title = {this.state.home.title} 
                        subTitle = {this.state.home.subTitle}
                        text = {this.state.home.text} />} />
          <Route path="/about" exact render={()=> 
              <AboutPage title = {this.state.about.title} 
                         />} />
          <Route path="/contact" exact render={()=> 
              <ContactPage title = {this.state.contact.title} 
                         />} />


          {/* footer is in components folder */}
          <Footer/>


        </Container>
      </Router>
   

    );

  };
  
  
}

export default App;
