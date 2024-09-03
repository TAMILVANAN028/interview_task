import { useState } from 'react';
import './App.css';
import axios from 'axios';

 
function App() {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);


    const handleInputvalue=(e)=>
      {
         setInputValue(e.target.value)
      }

      const handleSubmit = async (e) => {
        e.preventDefault();    
          const userId = inputValue.replace('user', '');
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
          setUserData(response.data);
      };
     
  
  return (
    <div className="App">
    <div className='navlinks'>
      <ul className='navbar'>
        <li>Gmail</li>
        <li>Images</li>
      </ul>
    </div>

    <h1 className='sitename'>Google</h1>
    <div className='centerinput'>
      <form onSubmit={handleSubmit}>
        <input
          className="inputbox"
          type='text'
          placeholder='Enter your URL (e.g., user1)'
          value={inputValue}
          onChange={handleInputvalue}
        />
      </form>
    </div>

    {userData && (
      <div className="user-details">
        <h2>User Details:</h2>
        <p>Name: {userData.name}</p>
        <p>Name: {userData.id}</p>
      </div>
    )}
  </div>
  );
}

export default App;
