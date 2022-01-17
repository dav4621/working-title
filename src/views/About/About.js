import React from 'react';
import './About.css';
import MyTypewriter from '../../components/Typewriter/MyTypewriter';

// anything picture related
import jdprofile from './jdprofile.jpeg';
import certbadge from './aws-certified-solutions-architect-associate.png';
import calbadge from './cal-logo.png';
import github from './github.png';
import linkedin from './linkedin.png';

const About = () => {
    return (
        <>
            <div className = 'flex justify-center p-10 text-8xl'>
                <MyTypewriter />
            </div>
            
            {/* This creates a grid of thirds, 2/3 will be paragraph content.
                styling is done with 'sm:' tag so that content will be linear on small screens */}

            {/* John Davis' Bio */}
            <div className = 'lg:px-24 sm:grid grid-cols-3'>
                <div className = 'sm:col-span-2 px-10'>
                    <p align = 'left'>Hello! My name is John Davis, and I am an IT professional specializing in the cloud. I have a B.S. in Computer Science from CalU, and have my Certified Solutions Architect - Associate from Amazon Web Services. When I'm not coding, I'm playing guitar, watching hockey, and lounging at the beach.</p>
                </div>

                {/* this divides the remaining third in half, one side for the picture, other side for badges */}
                <div className = 'sm:grid grid-cols-2'>
                    <div align = 'center'>
                        <img className = 'w-48' src = {jdprofile} alt = 'showing my face' />
                    </div>
                    
                    <div align = 'center'>
                        <img className = 'w-24 py-1' src = {calbadge} alt = 'college cred' />
                        <img className = 'w-24 py-1' src = {certbadge} alt = 'aws cred' />
                    </div>
                </div>
            </div>

                {/* shortcuts for github and linkedin */}
            <div className = 'flex justify-center'>
                <div>
                    <a href = 'https://www.linkedin.com/in/john-davis-1117361a4/' target = '_blank' rel = 'noreferrer'><img className = 'w-10' src = {linkedin} alt = 'link to linkedin' /></a>    
                </div>
                <div>
                    <a href = 'https://github.com/dav4621' target = '_blank' rel = 'noreferrer'><img className = 'w-10' src = {github} alt = 'link to github' /></a>
                </div>
            </div>

            {/* next bio will go here */}
        </>
    );
};

export default About;