import React, { useContext } from 'react'


const AppContext = React.createContext()
const UserContext = React.createContext()

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{last:"Gupta"}}>
            <UserContext.Provider value={"Suraj"}>
                {children}
            </UserContext.Provider>
    </AppContext.Provider>
}

const useGlobalContext = () => {
    const appContextValue = useContext(AppContext);
    const userContextValue = useContext(UserContext);
    return { appContextValue, userContextValue };
};

export { AppContext, AppProvider, useGlobalContext };