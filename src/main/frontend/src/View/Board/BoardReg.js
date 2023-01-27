import React, {useEffect, useState} from "react";
import BoardNav from "./BoardNav";
import {Container,Form,Button} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function BoardReg(){

  useEffect(() => {
  }, []);

  const navigate = useNavigate();

  let [board, setBoard] = useState({
    title:'',
    author:'',
    content:''
  });

  const saveBoard=()=>{
    axios.put("/api/saveBoard",{
      ...board
    })
      .then(response => {
        alert(response.data.message);
        navigate("/board");
      })
      .catch(error => alert(error))
    }

  const setTitle=(e)=>{
    setBoard({
      ...board,
      [e.target.name]: e.target.value
    });
  }

  const setAuthor=(e)=>{
    setBoard({
      ...board,
      [e.target.name]: e.target.value
    });
  }

  const setContent=(e)=>{
    setBoard({
      ...board,
      [e.target.name]: e.target.value
    });
  }


  return(
    <>
      <BoardNav/>
      <Container>
        <ul>
          <li>
            <Form id="board">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" name="title" placeholder="글 제목" onChange={setTitle}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>작성자</Form.Label>
                <Form.Control type="text" name="author" placeholder="작성자" onChange={setAuthor}/>
              </Form.Group>              
              <Form.Group className="mb-3">
                <Form.Label>게시글 내용</Form.Label>
                <Form.Control as="textarea" name="content" rows={10} placeholder="내용" onChange={setContent}/>
              </Form.Group>
              <div style={{textAlign:'center'}}>
                <Button onClick={saveBoard}>등록</Button>
              </div>
            </Form>
          </li>
        </ul>
      </Container>
    </>
  )

}

export default BoardReg;