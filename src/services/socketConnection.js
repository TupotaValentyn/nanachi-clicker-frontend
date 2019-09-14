import React, { useState, useContext } from 'react';
import { Subject } from "rxjs";


const GAME_TYPE = '';
const PLAYER = '';

export let connect  = null;
export const sub$ = new Subject(null);

const Connection = () => {

    connect = new WebSocket('ws://192.241.128.184:8080/ws');

    connect.onmessage = function (e) {
        sub$.next(JSON.parse(e.data));
    };
};


export default Connection;
