import React from 'react';
import './Home.css';
import MyTypewriter from '../../components/Typewriter/MyTypewriter';

const Home = () => {
    return (
        <>
            <div className = 'flex justify-center p-10 text-8xl'>
                <MyTypewriter />
            </div>

            <div>
	            <p align = 'left'>Welcome! This site is a collection of random things, from dev stacks to audio. Travel safe, the menus above will navigate you to where you want to go.</p>
            </div>
        </>
    );
};

export default Home;