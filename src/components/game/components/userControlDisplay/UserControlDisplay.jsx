import React from 'react';

const UserControlDisplay = () => {

    const money = '10000';
    const income = '54363';

    return (
        <div className='game-info'>
            <img className='user-avatar' src="" alt=""/>
            <p className='user-money'>
                <span>Money :</span>
                <span>{money}</span>
            </p>
            <p className='user-income'>
                <span>Income :</span>
                <span>{income}</span>
            </p>
        </div>)
};

export default UserControlDisplay;
