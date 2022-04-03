// import { useLocation } from 'react-router-dom';

// const About = () => {
//   const location = useLocation();

//   return (
//     <div>
//       <h1>소개</h1>
//       <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
//       <p>쿼리스트링: {location.search}</p>
//     </div>
//   );
// };

// export default About;

import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //베열타입의 값을 반환: 첫번쨰 원소는 쿼리파라미터 조회 및 수정
  const detail = searchParams.get('detail'); //get메서드를 통해 특정 쿼리파라미터를 조회, set메서드를 통해 특정 쿼리파라미터를 업데이트 함
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 프로젝트</p>
      <p>detail: {detail} </p>
      <p>mode: {mode} </p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
