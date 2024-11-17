import React from "react";
import { Link } from "react-router-dom";
import { ProductLinks } from './ProductLinks'

interface INavigationLink {
  className: string,
}

export const NavLinks: React.FC<INavigationLink> = ({ className }) => {
  return (
    <ul className={className}>
      {ProductLinks.map(({ id, text, url }) => {
        return (
          <li key={id}>
            <Link to={url}>{text}</Link>
          </li>
        )
      })}
    </ul>
  )
}