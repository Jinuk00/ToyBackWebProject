/* eslint-disable */
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./View/Home/Home";
import Board from "./View/Board/Board";
import Axios from "./View/axios";
import BoardReg from "./View/Board/BoardReg";
import Test from "./View/Test/Test";
import BoardDetail from "./View/Board/BoardDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-back2p">
        <div className="list-none m-0 pl-0 w-max bg-neutral-200 h-screen">
          <div className="bg-neutral-800 text-2xl py-2">
            <Link to="/" className="no-underline pl-1.5 pr-5">React Project</Link>
          </div>
          <div className="py-2">
            <Link to="/" className="no-underline pl-4">Home</Link>
          </div>
          <div className="py-2">
            <Link to="/board" className="no-underline pl-4">게시판</Link>
          </div>
          <div className="py-2">
            <Link to='/axios' className="no-underline pl-4">Axios</Link>
          </div>
          <div className="py-2">
            <Link to='/test' className="no-underline pl-4">test</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/board" element={<Board/>}/>
          <Route path="/board/:id" element={<BoardDetail/>}></Route>
          <Route path="/board/regist" element={<BoardReg/>}/>
          <Route path="/axios" element={<Axios/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
