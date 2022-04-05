import React from 'react';

const Reviews = (props) => {
    const { name, review, rating } = props.reviews;
    return (
        <div>
            <h2>This is reviews</h2>
            <h3>Name :{name}</h3>
            <h3>Review:{review}</h3>
            <h3>Rating:{rating}</h3>
        </div>
    );
};

export default Reviews;