import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext();
const UserContext = React.createContext();

const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("Batman");

    useEffect(() => {
        setTimeout( () => {
            const fetchData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=1f1408b7&s=${searchData}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.Search);
            } catch (error) {
                console.error('Error fetching data:', error);
                // You might want to handle the error here, e.g., set a default value for data
            }
        };

        fetchData();
        }, 1000 )
        
    }, [searchData]);

    return (
        <AppContext.Provider value={{ searchData, setSearchData }}>
            <UserContext.Provider value={{ data: data }}>
                {children}
            </UserContext.Provider>
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    const appContextValue = useContext(AppContext);
    const userContextValue = useContext(UserContext);

    return { appContextValue, userContextValue };
};

export { AppContext, AppProvider, useGlobalContext };




// import React, { useContext, useState, useEffect } from 'react'

// const AppContext = React.createContext();
// const UserContext = React.createContext();

// const AppProvider = ({ children }) => {
    
//     return (
//         <AppContext.Provider value={{ searchData, setSearchData }}>
//             <UserContext.Provider value={{ data: data }}>
//                 {children}
//             </UserContext.Provider>
//         </AppContext.Provider>
//     );
// };

// const useGlobalContext = () => {
//     const appContextValue = useContext(AppContext);
//     const userContextValue = useContext(UserContext);

//     return { appContextValue, userContextValue };
// };

// export { AppContext, AppProvider, useGlobalContext };
