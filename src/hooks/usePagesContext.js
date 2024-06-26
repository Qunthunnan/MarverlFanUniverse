import { createContext, useState, useContext } from "react";

const PagesContext = createContext();

export function PageProvider ({children}) {
    const [ pageState, setPageState ] = useState({});

    function setSpecificPageState(page, state) {
        // console.log(`set page`);
        // console.log(page);
        // console.log(`state`);
        // console.log(state);
        setPageState((prevState) => {
            const newState = {}
            Object.assign(newState, prevState);
            newState[page] = state;
            return newState;
        });
    }

    return (
        <PagesContext.Provider value={{ pageState, setPageState, setSpecificPageState }}>
            {children}
        </PagesContext.Provider>
    )
}

export const usePagesContext = () => useContext(PagesContext);