import React from 'react';
import openSocket from 'socket.io-client';


const connection = () => {
    const endpoint = 'http://localhost:8080/socket.io/';
    const socket = openSocket(endpoint);
    let request = null;
    socket.on('connected', data => {
        console.log('connected', data)
    })

    socket.on('timer', timestamp => console.log("nanachi"));
    socket.emit('msg', "sasat");
};


export default connection;
