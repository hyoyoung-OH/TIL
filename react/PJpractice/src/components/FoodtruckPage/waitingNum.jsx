import { Button, Badge } from 'react-bootstrap';
const WaitingNum = () => {
  return (
    <Button variant='warning'>
      대기번호 13번
      <span className='visually-hidden'>unread messages</span>
    </Button>
  );
};

export default WaitingNum;
