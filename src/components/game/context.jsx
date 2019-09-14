import React from 'react'

const UserContext = React.createContext({
    name: "Tanya",
    setName: () => {}
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext
