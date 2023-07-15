import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import user from './user.json';
import data from './data.json';
import friendsList from './friends.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsList} />
    </>
  );
}
