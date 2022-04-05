import React from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()


    return (
        <div>
            <div className='home-container'>
                <div className='heading-container'>
                    <h1>Welcome Movies World</h1>
                    <h1 className='movie-heanding'>New Movies Arrived.!!!</h1>
                    <p>Welcome to Movies World.Here You can find latest movies.<br />
                        Huge collection of movies are here just find what you want to watch <br />
                        So let's watch togather.</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9K7mlrHgYR57bGldfsK7wXs1zxDaWKaAxghXEUhIUzyd5myWttWS9e3qvLOIBEgHGxI&usqp=CAU" alt="" />
                </div>
            </div>
            <div>
                <h2>Customer Reviews (3)</h2>
                <div className='review-container'>
                </div>


                <button className='btn-review'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;