import React from "react";
import {Container,Nav,Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function BoardNav(){
  return(
    <Container>
    <ul>
      <Navbar className="justify-content-center" bg="dark">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/board" style={{color:'white'}}>게시판목록</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  as={Link} to="/board/regist" style={{color:'white'}}>글작성</Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
    </ul>
    </Container>
  )
}


export default BoardNav;