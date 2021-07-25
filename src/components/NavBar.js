import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '150px',
    padding: '15px',
    margin: '1 6px 6px',
    background: 'lightblue',
    textDecoration: 'none',
    color: 'white'
}

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink
                    to='/'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'navy'
                    }}
                >
                    Home Page
                </NavLink>
                <NavLink
                    to='/profiles'
                    exact
                    style={link}
                    activeStyle={{
                        background: 'navy'
                    }}
                >
                    Profiles
                </NavLink>
            </div>
        )
    }
}
export default NavBar