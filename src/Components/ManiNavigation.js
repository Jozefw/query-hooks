import React from 'react';
import {NavLink} from 'react-router-dom';

 function ManiNavigation() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/rq-super-heroes">Super Heroes Query</NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default ManiNavigation;