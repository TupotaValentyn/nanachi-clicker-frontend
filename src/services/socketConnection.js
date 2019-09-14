import React from 'react';



const connection = () => {
    const connect = new WebSocket('ws://localhost:8080/ws');
    connect.onmessage = function(e){ console.log(e.data); };
    // connect.onopen = () => connect.send(JSON.stringify({'type': 'message', 'value': 'hi'}));
    // connect.onopen(event => {
    //     console.log('nache pashe');
    // });

    // connect.onmessage(event => {
    //     console.log(event);
    // })
};


export default connection;
