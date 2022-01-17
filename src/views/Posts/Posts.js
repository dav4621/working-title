import React from 'react';
//import './Posts.css';

import MyTypewriter from '../../components/Typewriter/MyTypewriter';

// anything picture related

const Posts = () => {
    return (
        <>
            <div className = 'flex justify-center p-10 text-8xl'>
                <MyTypewriter />
            </div>
            <div>
                <p className = 'p-3'>I broke this. It'll be back soon. Maybe.</p>
            </div>    
        </>
    );
};

export default Posts;