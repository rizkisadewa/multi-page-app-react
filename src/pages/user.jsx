import React from 'react';
import PropTypes from 'prop-types';

const UsersPage = (props) => {
  return (
    <div>
      <ul>
        {["Rizki", "john", "Anis Yuiliana", "Jhoen Doe"].map((user, idx)=>{
          return <li key={idx}>{user}</li>
        })}
      </ul>
    </div>
  );
}

export default UsersPage;
