import { useParams } from 'react-router-dom';

const data = {
  lisa: {
    name: '오효영',
    description: '현재 배고픈 사람',
  },
  alice: {
    name: '오효진',
    description: '지금 자는 사람',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  );
};

export default Profile;
