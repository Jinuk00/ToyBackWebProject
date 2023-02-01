import React from "react";
import {Link} from "react-router-dom";

function BoardNav(){
  return(
      <div className="bg-neutral-800 flex justify-center h-14">
        <div className="pt-2.5">
          <Link to="/board" className='no-underline text-white font-singleDay'>게시판목록</Link>
        </div>
        <div className='px-3'/>
        <div  className="pt-2.5">
          <Link to="/board/regist" className='no-underline text-white font-sans'>글작성</Link>
        </div>
      </div>
  )
}


export default BoardNav;