import React from 'react';
import styled from 'styled-components';
import BlueButton from '../components/BlueButton';
import { useDispatch } from 'react-redux';
import { next } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 2.6em;
`;

const MainImg = styled.img`
  width: inherit;
`;

const SubHeader = styled.p`
  font-size: 1.8em;
  color: #777;
`;

export default function Start() {
  const dispatch = useDispatch();

  return (
    <>
      <Header>
        개발자 MBTI 조사
        <br />
        💙💻💙
      </Header>
      <MainImg src="/images/main.jpg" alt="MBTI 메인" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서
        <br />
        MBTI를 알아봅시다!
      </SubHeader>
      <BlueButton text="TEST 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
