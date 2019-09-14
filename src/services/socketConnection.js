import React from 'react';

const connect = new WebSocket('http://127.0.0.1:8080');

const connection = () => {
    connect.onopen(event => {
        console.log('nache pashe');
    });

    connect.onmessage(event => {
        console.log(event);
    })
};


export default connection;
