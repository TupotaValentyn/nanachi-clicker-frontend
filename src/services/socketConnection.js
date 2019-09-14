import React, { useState, useContext } from 'react';
import { Subject } from "rxjs";


let GAME_TYPE = '';
let PLAYER = '';
let interval = null;
let clicks = 0;

export const addClicks = (v) => {
    clicks += v
}

export let connect = null;
export const sub$ = new Subject(null);

export const send = (msg) => {
    console.log("Sended: " + msg['value']);
    connect.send(JSON.stringify(msg))
};

export const intervalSend = () => {
    console.log('game_player');
    interval = setInterval(() => {
        send({"type": "clicks", "value": clicks});
        clicks = 0
    }, 1000)
}

const Connection = () => {

    connect = new WebSocket('ws://192.241.128.184:8080/ws');

    connect.onmessage = function (e) {
        sub$.next(JSON.parse(e.data));
        connect.onmessage = function (e) {

            let data = JSON.parse(e.data);
            console.log(data);
            switch (data['type']) {
                case 'game_player':
                    intervalSend();
                    break
            }
        };

        connect.onclose = () => {
            console.log("CLOSED");
            clearInterval(interval);
        };


        return false;
    };

};

export default Connection;
