import React, {useState, useContext } from "react"
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSiderbar = () => {
        setIsSidebarOpen(true)
    }

    const closeSiderbar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) =>link.page === text);
        setPage(page);
        sel 
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    return (
    <AppContext.Provider value = {{
        isSubmenuOpen,isSidebarOpen,openSiderbar,closeSiderbar,openSubmenu,closeSubmenu
        }}>
        {children}
    </AppContext.Provider>
    )
}


export const useGlobalContext = () =>{
    return useContext(AppContext)
}