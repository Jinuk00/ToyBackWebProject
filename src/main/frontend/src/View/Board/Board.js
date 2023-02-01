/* eslint-disable */
import React, {useState, useEffect, memo} from "react";
import './board.css';
import BoardList from "./BoardList";
import BoardNav from "./BoardNav";
import Loading from "../Util/Loading";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Board(){
  let [board,setBoard] = useState([]);
  let [option, setOption] = useState('title');
  let [searchTxt, SetSearchTxt] = useState("");
  let [load, setLoad] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    searchBoard();
  }, []);

  const searchBoard = ()=>{
    setLoad(true);
    axios.post("/api/searchAllBoard",{option, searchTxt})
      .then(response => {
        setBoard(response.data.data);
        console.log(response.data.data);
        setLoad(false);
      })
      .catch(error => alert(error))
  }

  const moveDetail=(id)=>{
    let path = "/board/" + id;
    navigate(path);
  }

  const textEnter= (e)=>{
    if(e.key==="Enter"){
      searchBoard();
    }
  }

  const selectOption = (e)=>{
    let selectOption = e.target.value;
    setOption(selectOption);
  }

  const setTxt = (e)=>{
    SetSearchTxt(e.target.value)
  }

  return (
      <div className='w-10/12 pl-32 '>
        <BoardNav/>
        <div className="pt-3">
          {load ? <Loading/> : null}
          <div className="flex pl-32">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-24" onChange={selectOption}>
              <option value="title">제목</option>
              <option value="author">작성자</option>
            </select>
            <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5" placeholder="조회내용을 입력하세요." onChange={setTxt} onKeyUp={textEnter}/>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm focus:outline-none py-1 px-2 w-16 h-7" onClick={searchBoard}>조회</button>
          </div>
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
                <BoardList board={board} move={moveDetail}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Board;