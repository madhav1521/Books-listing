import React, { Suspense } from 'react'
import './App.css';
import Layout from './Components/Layout';
import { Switch, Route } from 'react-router-dom';
// import BookDetail from './Pages/BookDetail';

const AllBooks = React.lazy(() => import('./Pages/AllBooks'))
const AddBooks = React.lazy(() => import('./Pages/AddBooks'))
const Comments = React.lazy(() => import('./Components/Comments'))
const NotFound = React.lazy(() => import('./Pages/NotFound'))

function App() {
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch >
            <Route path='/' exact ><AddBooks /></Route>
            <Route path='/all-books' exact><AllBooks /></Route>
            <Route path='/add-books' exact><AddBooks /></Route>
            <Route path='/all-books/:bookdetails' exact><Comments /></Route>
            {/* <Route path='/all-books/:bookdetails/comments'><Comments /></Route> */}
            {/* <Redirect to="/add-books" exact /> */}
            <Route path='*' ><NotFound /></Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
