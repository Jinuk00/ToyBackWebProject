/* eslint-disable */
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from "react-bootstrap";
import Home from "./View/Home/Home";
import Board from "./View/Board/Board";
import Axios from "./View/axios";
import BoardReg from "./View/Board/BoardReg";
import Test from "./View/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div>
          <ul className="app_ul">
              <Navbar expand="lg" bg='dark' variant='dark'>
                <Navbar.Brand as={Link} to="/" style={{paddingLeft:'1em'}} >React Project</Navbar.Brand>
              </Navbar>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/board">게시판</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/axios'>Axios</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/test'>test</Nav.Link>
              </Nav.Item>
            </Nav>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/board" element={<Board/>}/>
        <Route path="/board/regist" element={<BoardReg/>}/>
        <Route path="/axios" element={<Axios/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
