import React from 'react';
import './User.css';

const User = ({ user }) => {
    const { name, review, picture, rating } = user;
    return (
        <div className='user'>
            <h2><img src={picture} alt="" /></h2>
            <h2>Name : {name}</h2>
            <h3>Review : {review}</h3>
            <h3>Ratings : {rating}</h3>

        </div>
    );
};

export default User;