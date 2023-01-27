/* eslint-disable */
import React, {useState,useEffect} from "react";
import {Form,Stack,Button,Container} from 'react-bootstrap';
import './board.css';
import BoardList from "./BoardList";
import BoardNav from "./BoardNav";
import axios from "axios";

function Board(){
  let [board,setBoard] = useState([]);
  let [option, setOption] = useState('title');
  let [searchTxt, SetSearchTxt] = useState("");

  useEffect(() => {
    searchBoard();
  }, []);

  const searchBoard = ()=>{
    axios.post("/api/searchBoard",{option, searchTxt})
      .then(response => {
        setBoard(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => alert(error))
  }

  const selectOption = (e)=>{
    let selectOption = e.target.value;
    setOption(selectOption);
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
            <Button variant='secondary' style={{width:'5em'}} onClick={searchBoard}>조회</Button>
          </Stack>
          <br/>
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">제목</th>
                  <th className="py-3 px-6 text-center">작성자</th>
                </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <BoardList board={board}/>
                </tbody>
              </table>
            </div>
          </div>
        </li>
      </ul>
    </Container>
    </>
  )
}

export default Board;