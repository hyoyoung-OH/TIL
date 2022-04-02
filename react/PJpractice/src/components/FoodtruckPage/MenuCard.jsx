import classes from './MenuCard.module.css';
const MenuCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default MenuCard;
