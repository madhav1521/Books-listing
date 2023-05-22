import './App.css';
import Comments from './Components/Comments';
import Layout from './Components/Layout';
import AddBooks from './Pages/AddBooks';
import AllBooks from './Pages/AllBooks';
import { Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';
// import BookDetail from './Pages/BookDetail';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch >
          <Route path='/' exact ><AddBooks /></Route>
          <Route path='/all-books' exact><AllBooks /></Route>
          <Route path='/add-books' exact><AddBooks /></Route>
          <Route path='/all-books/:bookdetails' exact><Comments /></Route>
          <Route path='/all-books/:bookdetails/comments'><Comments /></Route>
          {/* <Redirect to="/add-books" exact /> */}
          <Route path='*' ><NotFound /></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
