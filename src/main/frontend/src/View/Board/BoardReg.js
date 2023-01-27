import React from "react";
import BoardNav from "./BoardNav";
import {Container,Form} from "react-bootstrap";

function BoardReg(){

  return(
    <>
      <BoardNav/>
      <Container>
        <ul>
          <li>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>제목</Form.Label>
                <Form.Control type="email" placeholder="글 제목" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>작성자</Form.Label>
                <Form.Control type="text" placeholder="작성자" />
              </Form.Group>
            </Form>
          </li>
        </ul>
      </Container>
    </>
  )

}

export default BoardReg;