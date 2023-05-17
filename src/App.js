import './App.css';
import AddBooks from './Pages/AddBooks';
import AllBooks from './Pages/AllBooks';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route path='/' exact ></Route>
        <Route path='/all-books' ><AllBooks /> </Route>
        <Route path='/add-books' ><AddBooks /> </Route>
        <Redirect to='/add-books' /> 
      </Switch>
    </div>
  );
}

export default App;
