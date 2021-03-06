import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

import Footer from './components/footer'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Anindya Hantari\'s',
      headerLinks: [
        {title: 'Home', path: '/' },
        {title: 'About', path: '/about' },
        {title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Welcome to my page',
        subtitle: 'This should be filled with subtitle',
        text: 'But i still don\'t get the idea for that.'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s talk',
      }
    }
  }

  render() {
    return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom">
          <Navbar.Brand>Anindya Hantari's</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto" bg="transparent" expand="lg">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Footer />

      </Container>

    </Router>
    );
  }
}

export default App;
