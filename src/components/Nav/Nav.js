import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  NavDiv  from '../../styled/Nav.js'

export default class Nav extends Component {
    static get propTypes() {
        return {
           
        }
    }

    constructor (props) {
        super(props)
        this.state = {
            navArr: [
                {
                    name: '项目'
                },
                {
                    name: '技术'
                },
                {
                    name: '教育'
                },
                {
                    name: '联系方式'
                },
            ]
        }
    }

    render() {

        const { navArr } = this.state

        

        


       
        return (
            <NavDiv>
               
            </NavDiv>
        )
    }
}
