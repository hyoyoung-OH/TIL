import React from 'react';
import FoodtruckNotice from './FoodtruckNotice';
import MenuList from './MenuList';
import { useState } from 'react';
import { MdOutlineMenuBook } from 'react-icons/md';
import {
  AiFillNotification,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';
import WaitingNum from './WaitingNum';

//푸드트럭페이지
//동적으로 받아올 것들: 푸드트럭명, 대기번호 , 공지 글, 메뉴 정보,
//고정: 찜하기, 버튼, 각 요소별 제목, 요소 증감표시 및 장바구니 버튼

//임시 데이터 나중에 api 받아와서 뿌려야함
const DUMMY_DATA = [
  {
    id: 'm1',
    title: '쌀떡볶이',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tteokbokki.JPG/220px-Tteokbokki.JPG',
    price: '6,000',
  },
  {
    id: 'm2',
    title: '짜장떡볶이',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tteokbokki.JPG/220px-Tteokbokki.JPG',
    price: '8,000',
  },
];

const Foodtruck = () => {
  const [like, setLike] = useState(false);
  // const likeClick = () => {
  //   if (like) {
  //     setLike(ture);
  //     //찜 누르면 꽉찬 하트
  //   } else {
  //     setLike(false);
  //   }
  // };
  // const likebutton = () => {
  return (
    <>
      <section>
        <h1>푸드트럭 명</h1>
        <button>찜하기아이콘</button>
        <WaitingNum />
      </section>
      <section>
        <button>공지</button>
        <button>메뉴</button>
        <button>리뷰</button>
      </section>
      <section>
        <h2>
          공지사항 <AiFillNotification />
        </h2>
        <FoodtruckNotice />
      </section>

      <section>
        <h2>
          메뉴 <MdOutlineMenuBook />
        </h2>

        <MenuList menus={DUMMY_DATA} />
      </section>
    </>
  );
};

export default Foodtruck;
