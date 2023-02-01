import React, {useEffect, useState} from "react";
import BoardNav from "./BoardNav";
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
      <div className="w-10/12 pl-32">
        <BoardNav/>
        <div>
          <form id="board" >
            <div className="mb-3">
              <label htmlFor="title" className="block mb-2 text-base font-medium text-gray-900 text-black">제목</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="title" name="title" placeholder="글 제목" onChange={setTitle}/>
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="block mb-2 text-base font-medium text-gray-900 text-black">작성자</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="author" name="author" placeholder="작성자" onChange={setTitle}/>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="block mb-2 text-base font-medium text-gray-900 text-black">내용</label>
              <textarea rows={10} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="content" name="content" placeholder="내용" onChange={setTitle}/>
            </div>
            <div className="text-center">
              <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2" onClick={saveBoard}>등록</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default BoardReg;