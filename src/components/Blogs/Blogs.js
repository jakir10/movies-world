import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='bolgs'>
            <h2>Our Blogs</h2>
            <h3>What is contex api</h3>
            <p>Context API is a way for effectively produce global variables which can be passed around. It's a alternative of "prop drilling" or we can say moving props from grandparent to child to parent.</p>
            <h3>What is a semantic tag?</h3>
            <p>
                Semantic tag is that whice clearly describe their meaning in a human and machine readable way. Elements such as "header" , "form", "table," "footer" and "article" are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
            </p>

        </div>
    );
};

export default Blogs;