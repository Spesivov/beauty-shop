import React from "react";
import { links } from "./ProductLinks";
import { Link } from "react-router-dom";
import {useProductsContext} from '../../context/productContext'
 
export const NavLinks: React.FC<{className: string, isSideBar?: boolean}> = ({className, isSideBar}) =>{
    const {closeSideBar} = useProductsContext();
    return (
        <ul className={className}>
          {links.map(({ id, text, url }) => {
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