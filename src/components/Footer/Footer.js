import React from 'react';

import './Footer.css';
import jeffbadge from './aws.png';
import logo from './logo192.png';

const Footer = () => {
    const imageStyle = {
        display: 'inline',
        width: '25px'
    }

    return (
        <>
            <p className = 'pt-80' align = 'center'>2021. Powered by <img style = {imageStyle} src = {logo} alt = 'logo' /> and <img style = {imageStyle} src = {jeffbadge} alt = 'logo' />.</p>
        </>
    );
};

export default Footer;