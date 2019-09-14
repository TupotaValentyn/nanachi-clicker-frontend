import React, {useState} from 'react';


const GAME_TYPE = '';
const PLAYER = '';

const Connection = () => {
    const connect = new WebSocket('ws://192.241.128.184:8080/ws');

    connect.onmessage = function(e){
        console.log(e.data)
    };

    return false;
};


export default Connection;
