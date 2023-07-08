import './App.css';
import Profile from './components/Profile/Profile.jsx';
import user from './user.json';

export default function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}
