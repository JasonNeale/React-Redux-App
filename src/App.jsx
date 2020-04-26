// External imports
import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

// Local imports
import EffectsComp from './components/EffectsComp'
import StrainsComp from './components/StrainsComp'
import HomeComp from './components/HomeComp'
import NavComp from './components/NavComp'

// Asset imports
import './App.css'


const App = () => {
    return (
        <Container id="root" className="content-wrapper">
            <header>
                <div className="center-horz">
                    <img alt="logo" src="/assets/img/title_logo.png" />
                </div>
            </header>
            <Row className="section-nav">
                <NavComp />
            </Row>
            <Row className="section-body">
                <Route exact path={'/'} component={HomeComp} />
                <Route exact path={'/effects'} component={EffectsComp} />
                <Route exact path={'/'} />
            </Row>
        </Container>
    )
}

export default App