import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
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
                            .typeString('Working Title')
                            .start();
                        }
                    }
                />
            </div>

            <div>
	            <p align = 'left'>Welcome! This site is a collective archive of IT and Graphic Design content, whether it be current projects, future ideas, or articles on things we find interesting. Travel safe, the menus above will navigate you to where you want to go.</p>
            </div>
        </>
    );
};

export default Home;