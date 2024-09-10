import React from 'react';
import SignIn from './signIn';


const App = () => {
  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submit button clicked');
  };
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '250px', 
      width: '300px',
      backgroundColor: 'lightblue',
      color: 'blue',
      padding: '20px',
      marginLeft:'500px',
      marginTop:'100px',
      borderRadius:'8px'
    }}>
        <h4>Enter your username or email address :</h4>
        <SignIn type ='text' placeholder='Username or email address'/> 
        <h4>Enter your Password :</h4>
        <SignIn type ='text' placeholder='Password'/> 
        <SignIn type='button' onClick={handleSubmit} />



    </div>
  );
}

export default App;




