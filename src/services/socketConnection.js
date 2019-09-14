import React, {useState} from 'react';


let GAME_TYPE = '';
let PLAYER = '';
let connect = null;
let interval = null;
let clicks = 0;

export const addClicks = (v) => {
    clicks += v
}  

const Connection = () => {
    connect = new WebSocket('ws://localhost:8080/ws');

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

    connect.onclose = () => {
        console.log("CLOSED")
        clearInterval(interval);
    }


    return false;
};

export const send = (msg) => {
    console.log("Sended: " + msg['value'])
    connect.send(JSON.stringify(msg))
} 

export const intervalSend = () => {
    console.log('game_player')
    interval = setInterval(() => {
        send({"type": "clicks", "value": clicks})
        clicks = 0
    }, 1000)
}


export default Connection;
