// External imports
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'


// Local imports
import { listAllEffects } from '../redux/actions/index'


const EffectsDropdown = (props) => {

    useEffect(() => {
        console.log('useEffect called!')
        props.listAllEffects()
    }, [])

    return (
        <Row>
            <Col>
                <h1>Strains</h1>
                <select>
                    {
                        props.apiData && props.apiData.map(( item ) => (
                            <option>{item.effect}</option>)
                        )
                    }
                </select>
            </Col>
            <Col>
                
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        apiData: state.apiData
    }
}

const mapDispatchToProps = { listAllEffects }

export default connect( mapStateToProps, mapDispatchToProps )( EffectsDropdown )