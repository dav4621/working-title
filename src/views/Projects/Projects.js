import React from 'react';
import './Projects.css';
import Typewriter from 'typewriter-effect';

// anything picture related
import pooPi from './poopi.png';
import device from './device.jpeg';
import framework from './logo192.png';
import screencap from './screen-cap.png';
import python from './python.jpeg';
import autozoom from './AutoZoom.png';

const Projects = () => {
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
                            .typeString('Projects')
                            .start();
                        }
                    }
                />
            </div>

            {/* Quick Links to the different projects (may eventually be useful) */}
            <div>
            </div>

            {/* pooPi */}
            <div className = 'grid grid-cols-2'>
                <div>
                    <img align = 'right' className = 'w-16' src = {pooPi} alt = 'logo' />
                </div>

                <div className = 'flex items-center'>
                    <h1 align = 'left' className = 'text-2xl'>pooPi</h1>
                </div>
            </div>

                {/* actual description of project */}
            <div>
                <img align = 'right' className = 'w-56' src = {device} alt = 'device' />

                <p className = 'p-3'>“Because we shouldn’t have to smell it.” This project came about as a joke at first. We have a cat in the house, and it is my niece and nephew’s job to take care of her. That’s making sure that she’s fed and keeping her litter box clean. However unsurprisingly, the latter is usually never done, and the upstairs will have a hint of ammonia smell. One day, the adults of the house were joking around, “we should make a device that’ll remind the kids to empty that litter box.” So, I took a crack at it.</p>

                <p className = 'p-3'>The base of this device is a Raspberry Pi 3 hooked up to an MQ-135 gas sensor. The Pi isn’t capable of directly reading analog inputs, so the sensor data is wired through an MCP3008 ADC (analog-to-digital converter). It’s running plain old Raspbian (Raspberry Pi OS).</p>

                <p className = 'p-3'>If hardware isn’t your thing, the software is a little more interesting. The program is written in Python. What it does, is it reads in the data from the sensor and converts it into a value more usable. The program then compares the reading to a predetermined threshold (currently set to 300). If the reading is above the threshold, the program sends out notifications through AWS SNS that the litter box needs cleaned. Then, the program cuts off internet access to the children’s devices (iPads, tv, etc.). It does this through the router’s API, in this case Netgear. Internet access will only be restored once the levels drop below the threshold. The program is set to run every hour using Cron.</p>

                <p className = 'p-3'>While this is going on, the program sends data to an AWS DynamoDB table. This includes a descriptive string (‘normal’ or ‘too high’), the level read by the sensor, and the time of execution. This data is used by another project.</p>

                <p className = 'p-3'>While the project is functional, there’s a couple things in the pipeline I plan to improve. This includes:</p>

                <p className = 'p-3'>- A 3D-printed case to elegantly connect the Pi to the breadboard used to wire the sensor.<br/>
                - More permanent wiring solution instead of a breadboard.<br/>
                - More data collection. Store daily/weekly averages, # of times over threshold in a database for analysis.<br/>
                - Mobile application to deliver notifications. SNS notifications are currently done via email.</p>
            </div>

            {/* pooPi display */}
            <div className = 'grid grid-cols-2'>
                <div>
                    <img align = 'right' className = 'w-16' src = {framework} alt = 'logo' />
                </div>

                <div className = 'flex items-center'>
                    <h1 align = 'left' className = 'text-2xl'>pooPi Display</h1>
                </div>
            </div>

                {/* actual description of project */}
            <div>
                <img align = 'right' className = 'w-64' src = {screencap} alt = 'screenshot' />

                <p className = 'p-3'>Like the name gives away, this is a frontend to the pooPi project. It is an application written in React/Javascript that displays the data stored in DynamoDB. It makes a simple GET request to retrieve the data, and neatly displays it on the page.</p>

                <p className = 'p-3'>It’s a small application, but there are a couple improvements/additions in the pipeline I plan to add. This includes:</p>

                <p className = 'p-3'>- Taking the extra data from pooPi (once implemented) and manipulating the data on a graph.<br/>
                - Implementin jwt token authorization during the GET request.<br/>
                - Deploying the application through Terraform.</p>
            </div>

            {/* AutoZoom (needs work. like badly)*/}
            <div className = 'grid grid-cols-2'>
                <div>
                    <img align = 'right' className = 'w-16' src = {python} alt = 'logo' />
                </div>

                <div className = 'flex items-center'>
                    <h1 align = 'left' className = 'text-2xl'>AutoZoom</h1>
                </div>
            </div>

                {/* actual description of project */}
            <div>
                <img align = 'right' className = 'w-56' src = {autozoom} alt = 'another logo' />

                <p className = 'p-3'>When the Coronavirus pandemic forced everyone inside in isolation, I was halfway through finishing my final semester of college. I went from living in an apartment and going to class to returning home, and attending all my lectures via the now notorious Zoom. From talking to my friends, I discovered it was very common for people to join their lecture, mute the mic and camera, and sleep while getting attendance credit (of course, I would never do such a thing). This phenomenon became the inspiration for this project.</p>

                <p className = 'p-3'>AutoZoom is a program written in Python in which the user inputs data, such as meeting ID information and password (if needed), and start/end times of the session. When the appropriate time hits, the program will automatically launch Zoom, join the session, deactivate the microphone/camera, and leave the session at the specified time. This is possible using the pyAutoGui library, and its use of analyzing screenshots of UI elements to interact with other applications.</p>

                <p className = 'p-3'>I am currently in the process of revamping this program, mainly making it more user-friendly, and implementing a more reliable method of locating the interactive objects of Zoom.</p>
            </div>

            {/* Adventures of Uni (no hope) */}
        </>
    );
};

export default Projects;