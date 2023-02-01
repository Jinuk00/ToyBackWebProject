import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import BoardNav from "./BoardNav";

function BoardDetail(){

  let [content, setContent] = useState({
    title:"",
    author:"",
    content:""
  });

  const params = useParams();

  const detailContent =()=>{
    axios.get("/api/searchBoard/" + params.id)
        .then(response => {
          console.log(response.data.data);
          setContent(response.data.data);
        })
        .catch(error => alert(error));
  }
  useEffect(()=>{
    detailContent();
  },[]);
  
  return(
      <div className="w-10/12 pl-32">
        <BoardNav/>
        <div>
          <form id="board" >
            <div className="mb-3">
              <label htmlFor="title" className="block mb-2 text-base font-medium text-gray-900 text-black">제목</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="title" name="title" value={content.title} readOnly="true"/>
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="block mb-2 text-base font-medium text-gray-900 text-black">작성자</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="author" name="author" value={content.author} readOnly="true"/>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="block mb-2 text-base font-medium text-gray-900 text-black">내용</label>
              <textarea rows={10} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="content" name="content" value={content.content} readOnly="true"/>
            </div>
          </form>
        </div>
      </div>
  )
}

export default BoardDetail;