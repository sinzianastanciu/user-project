import logo from './logo.svg';
import './App.css';
import AddNewUser from './components/User/AddNewUser';
import UserList from './components/User/UserList';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user)  => {
    setUsers((prevState) => {
      return [user, ...prevState];
    })
  }

  return (
    <div>
      <AddNewUser addNewUser={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
