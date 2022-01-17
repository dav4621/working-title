import React from 'react';
import './Typewriter.css';
import {useEffect, useState, useRef} from 'react';
import {useLocation} from 'react-router-dom';   // needed to determine route
import useTypewriter from 'react-typewriter-hook';

const words = ['Working Title', 'About', 'Projects', 'Posts', 'If We Only Had a Podcast?...'];
var index;

function DetermineRoute() {
    var location = useLocation();
    console.log(location.pathname);
    switch (location.pathname) {
        case '/Home':
            index = words[0];
            break;
        case '/About':
            index = words[1];
            break;
        case '/Projects':
            index = words[2];
            break;
        case '/Posts':
            index = words[3];
            break;
        case '/IWOHAP':
            index = words[4];
            break;
        default:
            console.log("This'll be used in the event of a routing error, or when the typewriter isn't being used (like when displaying an article)");
    }
};

const MyTypewriter = () => {
    DetermineRoute();
    
    const [wordUsed, setWordUsed] = useState(index);
    const intervalRef = useRef({});

    const renderedWord = useTypewriter(wordUsed);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                setWordUsed(words[index]);
            }, 9999999999);
        }, [wordUsed]
    );
    
    return (
        <div>
            <p className = 'cursor'>{renderedWord}</p>
        </div>
    );
};

export default MyTypewriter;