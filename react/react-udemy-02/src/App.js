import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Route path='/'>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/Favorites'>
        <FavoritesPage />
      </Route>
    </div>
  );
}

export default App;
