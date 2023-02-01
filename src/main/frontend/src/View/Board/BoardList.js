import React, {useEffect, useState} from "react";

function boardList(props){
  if(props.board.size==0){
    return;
  }
  return(
    props.board.map(board =>(
      <tr key={board.id} className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap"></td>
        <td scope="row" className="py-3 px-6 text-left whitespace-nowrap">
          <span className="font-medium">{board.title}</span></td>
        <td scope="row" className="py-3 px-6 text-left whitespace-nowrap">
          <span className="font-medium">{board.author}</span></td>
      </tr>
      )
    )
  )
}

export default boardList;