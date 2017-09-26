import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  NavDiv  from '../../styled/Nav.js'
import classNames from 'classnames'

export default class Nav extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object,
           activeIndex: PropTypes.number,
        }
    }


    
    componentWillMount() {
        if(document.body.scrollTop > document.body.clientHeight - 400) {
            console.log('fixed')
            this.setState({
                fixed: true
            })
        }
        window.addEventListener('scroll', () => {
            console.log(document.body.scrollTop)
            console.log(document.body.clientHeight)
             if(document.body.scrollTop > document.body.clientHeight - 400) {
                console.log('fixed')
                this.setState({
                    fixed: true
                })
            } else {
                this.setState({
                    fixed: false
                })
            }
        })
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
             fixed: false
        }
    }

    render() {
        const { _this, activeIndex } = this.props
        const { navArr, fixed } = this.state
        /*if(activeIndex) {
            console.log(activeIndex)
        }*/

        const navs = navArr.map((item, index) => {
            return (
                <li key={index} className={classNames('nav', {active: activeIndex === index})}
                onClick={() => {_this._chooseNav(index)}}>
                    {item.name}
                </li>
            )
        })

        


       
        return (
            <NavDiv className={classNames({fixed})} >
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
