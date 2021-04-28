import React from 'react';
//import './Posts.css';
import Typewriter from 'typewriter-effect';

// anything picture related

const Posts = () => {
    return (
        <>
            <div className = 'flex justify-center p-10 text-8xl'>
                <Typewriter
                    options = {{
                        cursor: '_'
                    }}
                    onInit = {
                        (typewriter) => {
                            typewriter.pauseFor(1)
                            .typeString('Posts')
                            .start();
                        }
                    }
                />
            </div>
        </>
    );
};

export default Posts;