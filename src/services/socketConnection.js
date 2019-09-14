import React from 'react';


const connection = () => {
    const connect = new WebSocket('http://127.0.0.1:8080');

    connect.onopen(event => {
        console.log('nache pashe');
    });

    connect.onmessage(event => {
        console.log(event);
    })
};


export default connection;
