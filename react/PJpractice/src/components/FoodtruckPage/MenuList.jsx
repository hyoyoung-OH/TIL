import classes from './MenuList.module.css';
import MenuItem from './MenuItem';

//메뉴 모아놓는 리스트
const MenuList = (props) => {
  return (
    <ul className={classes.list}>
      {props.menus.map((menu) => (
        <MenuItem
          key={menu.id}
          id={menu.id}
          title={menu.title}
          image={menu.image}
          price={menu.price}
        />
      ))}
    </ul>
  );
};

export default MenuList;
