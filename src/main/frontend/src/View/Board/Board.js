/* eslint-disable */
import React, {useState,useEffect} from "react";
import {Form,Stack,Button,Container} from 'react-bootstrap';
import './board.css';
import BoardList from "./BoardList";
import BoardNav from "./BoardNav";

function Board(){
  let [board,setBoard] = useState();
  let [Opt, setOpt] = useState('title');
  let [searchTxt, SetSearchTxt] = useState("");

  useEffect(()=>{
  },[Opt,searchTxt])

  useEffect(()=>{

  })

  const selectOption = (e)=>{
    let selectOption = e.target.value;
    setOpt(selectOption);
  }

  const setTxt = (e)=>{
    SetSearchTxt(e.target.value)
  }
  return (
    <>
    <BoardNav/>
    <Container >
      <ul>
        <li>
          <Stack direction="horizontal" gap={3}>
            <select className="selectBox" onChange={selectOption}>
              <option value="title">제목</option>
              <option value="author">작성자</option>
            </select>
            <Form.Control type='text' placeholder="조회내용을 입력하세요." onChange={setTxt}/>
            <Button variant='secondary' style={{width:'5em'}} >조회</Button>
          </Stack>
          <br/>
          <BoardList board={board}/>
        </li>
      </ul>
    </Container>
    </>
  )
}

export default Board;