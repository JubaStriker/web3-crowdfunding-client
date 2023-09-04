import React, { useState } from 'react';
import { logo, sun } from '../assets'
import { navlinks } from '../constants'
import { link, useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    return (
        <div>
            Sidebar
        </div>
    );
};

export default Sidebar;