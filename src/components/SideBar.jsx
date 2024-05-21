import { Navbar, Nav, Button, InputGroup, Form, Container } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchResultsAction } from "../redux/actions";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getSearchResultsAction(searchQuery));
    setSearchQuery("");
  };
  return (
    <aside className="col col-2">
      <Navbar expand="md" fixed="left" id="sidebar" className="justify-content-between">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="#">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" data-target="#navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav flex-column">
              <Nav.Item>
                <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <InputGroup className="mt-3">
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button variant="outline-secondary" className="btn-sm" onClick={handleSearch}>
                    GO
                  </Button>
                </InputGroup>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button variant="primary" className="signup-btn">
            Sign Up
          </Button>
          <Button variant="secondary" className="login-btn">
            Login
          </Button>
          <span>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </span>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
