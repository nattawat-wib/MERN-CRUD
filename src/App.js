import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateStudent from './components/create-student';
import EditStudent from './components/edit-student';
import StudentList from './components/student-list';

function App() {
  return (
    <Router>
      <div className="App">

          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className="nav-link"> React MERN stack </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-student'} className="nav-link">
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>

          <Container >
            <Row>
              <Col md="12">
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/" component={CreateStudent} />
                    <Route path="/create-student" component={CreateStudent} />
                    <Route path="/edit-student/:id" component={EditStudent} />
                    <Route path="/student-list" component={StudentList} />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>

      </div>
    </Router>
  );
}

export default App;
