import Home from './pages/home/Home';
import Topbar from './components/topbar/topBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import PostList from './pages/postList/PostList'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Contact from './pages/contact/Contact'
import Event from './pages/event/Event'
import EventList from './pages/eventList/EventList'
import News from './pages/news/News'
import NewsList from './pages/newsList/NewsList'
import PostDetail from './components/postDetail/PostDetail';
import User from './pages/user/User';
import AllUser from './pages/user/AllUser';

function App() {
  const user = false
  return (
    <>
      <Topbar />
      <Router>
        <Switch>
          <Route path = '/user'>
            <AllUser />
          </Route>
          <Route path = '/user/:id'>
            <User />
          </Route>
          <Route path = '/post/:id'>
            <PostDetail />
          </Route>
          <Route path = '/news/:id'>
            <News />
          </Route>
          <Route path = '/news'>
            <NewsList />
          </Route>
          <Route path = '/event/:id'>
            <Event />
          </Route>
          <Route path = '/event'>
            <EventList />
          </Route>
          <Route path = '/contact'>
            <Contact />
          </Route>
          <Route path = '/post'>
            <PostList />
          </Route>
          <Route path = '/login'>
            {user? <Redirect to="/" />: <Login />}
          </Route>
          <Route path = '/register'>
            {user? <Redirect to="/" />: <Register />} 
          </Route>
          <Route path = '/'>
            <Home />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
