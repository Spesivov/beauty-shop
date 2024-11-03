import React from "react";
import { Link } from "react-router-dom";
import {useProductsContext} from '../../context/ProductContext'
import {ProductLinks} from './ProductLinks'

interface INavigationLink{
  className: string,
  isSideBar?: boolean
}

export const NavLinks: React.FC<INavigationLink> = ({className, isSideBar}) =>{
    const {closeSideBar} = useProductsContext();
    return (
        <ul className={className}>
          {ProductLinks.map(({ id, text, url }) => {
            return (
              <li key={id} onClick={isSideBar ? closeSideBar : undefined}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {isSideBar && (
            <li>
              <Link to='/checkout' onClick={closeSideBar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
      )
}