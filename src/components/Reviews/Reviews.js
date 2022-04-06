import React, { useEffect } from 'react';
import useReviews from '../../hooks/useReviews';
import User from '../User/User';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();



    return (
        <div>
            <h2>All Reviews</h2>
            <div className="user-container">
                {
                    reviews.map(user => <User
                        key={user._id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Reviews;