import * as React from "react";

let ContextOne = React.createContext();

let initialState = {
    user: 'user',
    game: "game",
    gameTick: null
};

let reducer = (state, action) => {
    switch (action.type) {
        case "set-user":
            return {...state, user: action.payload};
        case "reset-user":
            return {...state, user: null};
        case "set-game":
            return {...state, game: action.payload};
        case "reset-game":
            return {...state, game: null};
        case "set-game-tick":
            return {...state, gameTick: action.payload};
        case "reset-game-tick":
            return {...state, gameTick: null};
        case "set-enemy":
            return {...state, enemy: action.payload};
    }
};

function ContextOneProvider(props) {
    // [A]
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = {state, dispatch};


    // [B]
    return (
        <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
    );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };



