import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Board() {
  return (
    <>
      <h1>게시판 페이지 입니다!</h1>;
      <Link to="1">
        {/* /board/1 이 주소로 가는거임 */}
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
    </>
  );
}
