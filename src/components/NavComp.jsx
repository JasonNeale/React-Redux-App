import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Col } from 'reactstrap'


const NavComp = () => {

    const [active, setActive] = useState()

    const handleItemClick = (e, name) => {
        setActive(name)
    }

    return (
        <Col className="text-center">
            <NavLink exact to="/">Home</NavLink>
            |&nbsp;&nbsp;
            <NavLink exact to="/effects">Effects</NavLink>
            |&nbsp;&nbsp;
            <NavLink exact to="/">Strains</NavLink>
        </Col>
    )
}

export default NavComp