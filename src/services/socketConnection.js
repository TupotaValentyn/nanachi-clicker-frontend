import React from 'react';
import socketIOClient from "socket.io-client";

const connection = () => {
    const endpoint = 'http://127.0.0.1:8080';
    const socket = socketIOClient(endpoint);
    let request = null;
    socket.on('FromApi', data => {
        request = data;
    })
};


export default connection;
