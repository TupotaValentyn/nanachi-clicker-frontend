import React, {useState} from 'react';


let GAME_TYPE = '';
let PLAYER = '';
let connect = null;
let connect2 = null;
let interval = null;
let clicks = {'frontend': 0, 'backend': 0};

export const addClicks = (v) => {
    clicks['frontend'] += v['frontend'] 
    clicks['backend'] += v['backend'] 
}  

const Connection = () => {
    connect = new WebSocket('ws://localhost:8080/ws');
    connect2 = new WebSocket('ws://localhost:8080/ws2');

    connect.onmessage = function(e) {

        let data = JSON.parse(e.data)
        console.log(data)
        switch (data['type']) {
            case 'game_player':
                intervalSend()
                break
        }
        // console.log(e.data)
    };

    connect2.onmessage = function(e) {

        let data = JSON.parse(e.data)
        console.log(data)
        switch (data['type']) {
            case 'game_player':
                intervalSend()
                break
        }
        // console.log(e.data)
    };

    connect.onclose = () => {
        console.log("CLOSED")
        clearInterval(interval);
    }

    connect2.onclose = () => {
        console.log("CLOSED")
        clearInterval(interval);
    }


    return false;
};

export const send = (msg) => {
    console.log("Sended: " + msg['value'])
    connect2.send(JSON.stringify(msg))
} 

export const intervalSend = () => {
    console.log('game_player')
    interval = setInterval(() => {
        send({"type": "clicks", "value": clicks})
        clicks = {'frontend': 0, 'backend': 0}
    }, 1000)
}


export default Connection;
