// 자신이 좋아하는 meetup 볼 수 있음
import NewMeetupForm from '../component/meetups/NewMeetupForm';

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    //http 요청 보냄
    fetch('');
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
