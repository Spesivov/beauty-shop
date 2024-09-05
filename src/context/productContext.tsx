import React, { useContext } from "react"

export type initialState = {
    isSideBarOpen: boolean,
    openSideBar: () => void,
    closeSideBar: () => void
}

const defaultState: initialState = {
    isSideBarOpen: false,
    openSideBar: () => { },
    closeSideBar: () => {}
}

const ProductContext = React.createContext(defaultState);

export const useProductsContext = () => {
    return useContext(ProductContext)
  }