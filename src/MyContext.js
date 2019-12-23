import React from "react";

const MyContext = React.createContext({});

export const UserProvider = MyContext.Provider;
export const UserConsumer = MyContext.Consumer;
export default MyContext;
