import React from 'react';
import UserInfoPanel from '../userInfoPanel/UserInfoPanel'
import './userMainProfile.css';


const UserMainProfile = () => {

    const changeColor = () => {
        const day = getComputedStyle(document.documentElement).getPropertyValue('--day-color');
        const night = getComputedStyle(document.documentElement).getPropertyValue('--dark-color');

        document.documentElement.style
            .setProperty('--day-color', night);
        document.documentElement.style
            .setProperty('--dark-color', day);
    };

    return (
        <div className='start-page'>
            <button onClick={changeColor}>
                DAY_NIGHT
            </button>
            <UserInfoPanel/>
        </div>
    )
};


export default UserMainProfile;
