import MenuCard from './MenuCard';
import { useState } from 'react';
import classes from './MenuItem.module.css';
//메뉴 하나
const MenuItem = (props) => {
  const [number, setNumber] = useState(0);
  const increaseNumber = () => {
    //메뉴 갯수 1개 증가
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    //메뉴 갯수 1개 감소
    if (number <= 0) {
      setNumber = 0;
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <li>
      <MenuCard>
        <div>
          <img src={props.image} alt={props.title} />
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </div>
        <button onClick={increaseNumber}>+</button>
        <span>{number}</span>
        <button onClick={decreaseNumber}>-</button>
      </MenuCard>
    </li>
  );
};
export default MenuItem;
