import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  HeaderDiv  from '../../styled/Header.js'
import Navs from '../Nav/Nav.js'

export default class Header extends Component {
    static get propTypes() {
        return {
           
        }
    }

    constructor (props) {
        super(props)
        this.state = {
           
        }
    }

    render() {


        

        


       
        return (
            <HeaderDiv>
               <Navs />
            </HeaderDiv>
        )
    }
}
