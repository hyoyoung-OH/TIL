import React from 'react';
import './App.css';
import { useState, useRef } from 'react';
import DiaryList from './DiaryList';
import DiaryEditor from './DiaryEditor';

// const DUMMYLIST = [
//   {
//     id: 1,
//     author: '오효영',
//     content: 'hihi',
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: '오오오',
//     content: 'hihi',
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: '장나라',
//     content: 'hihㅈㅈi',
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: '우짤',
//     content: 'hihㄴㅇㅇi',
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new DataTransfer().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={[data]} />
      {/* <div>console.log(author)</div> */}
    </div>
  );
}

export default App;
