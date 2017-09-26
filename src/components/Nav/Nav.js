import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  NavDiv  from '../../styled/Nav.js'
import classNames from 'classnames'

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
                    name: '首页'
                },
                {
                    name: '个人简介'
                },
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
            ],
            activeIndex: 0,
        }
    }

    render() {

        const { navArr, activeIndex } = this.state

        const navs = navArr.map((item, index) => {
            return (
                <li key={index} className={classNames('nav', {active: activeIndex === index})}
                onClick={() => {}}>
                    {item.name}
                </li>
            )
        })

        


       
        return (
            <NavDiv>
               <div className="navContent">
                    <div className="logo">
                            <span className="name">刘德铨 </span> 
                            / <span className="cv">简历</span>
                    </div>
                    <ul className="navs">
                        {navs ? navs : null}
                    </ul>
               </div>
            </NavDiv>
        )
    }
}
