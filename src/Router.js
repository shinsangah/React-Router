import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
import Header from './components/Header';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Home from './components/Home';
import TestRedux from './components/TestRedux';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <ListContainer />
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 기본 주소로 보낼 때 Home 컴포넌트 만들어주면 됨 */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/board" element={<Board />} /> */}
      {/* <Route path="/board/:boardID" element={<BoardDetail />} /> */}
      {/* useparams를 받을 때 어떤 파라미터 키로 받을지 (/:boardID) 선언을 잘 해야함 */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* *의 의미: 모든 주소값을 처리 */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
