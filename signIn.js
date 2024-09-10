import React from 'react';

const SignIn = ({ type, placeholder, onClick }) => {
  return (
    <div style={{ marginBottom: '7px' }}>
      {type === 'button' ? (
        <button onClick={onClick} style={buttonStyle}>Submit</button>
      ) : (
        <input type={type} placeholder={placeholder} style={inputStyle} />
      )}
    </div>
  );
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop:'20px',
  marginLeft:'100px',
  width:'100px',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid lightgray',
  borderRadius: '5px',
  width: '280px',
};

export default SignIn;



