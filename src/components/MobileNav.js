import React from 'react';
import { Link } from "gatsby";
import {data} from "../utils/links2"


const MobileNav = ({closeNav}) => {

    const tempLinks = data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url} onClick={closeNav}>{link.text}</Link>
          </li>
        )
      })

    return (
        <nav className="mobile-pagelinks">
            <ul>
                {tempLinks}
            </ul>
        </nav>
    )
}


export default MobileNav