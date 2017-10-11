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
            this.setState({
                fixed: true
            })
        }

        const scrollFun = () => {
             const { _this } = this.props
           /*  console.log(document.body.scrollTop, document.body.clientHeight - 400)*/
             if(document.body.scrollTop > document.body.clientHeight - 400) {
                this.setState({
                    fixed: true
                })
            } else {
                this.setState({
                    fixed: false
                })
            }
            _this._changeNavIndex()
        }
        document.ontouchmove = () => {
            console.log('ontouchmove')
        }
        window.ontouchmove = document.ontouchmove = window.onscroll = window.onmousewheel = document.onmousewheel = scrollFun
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll', scrollFun, false)
        }
      /*  document.body.addEventListener('mousewheel', scrollFun)*/
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
                    name: '技能'
                },
                {
                    name: '教育'
                },
                {
                    name: '联系方式'
                },
            ],
             fixed: false,
             isSpread: false
        }
    }

    _toggle () {
        const { isSpread } = this.state
        this.setState({
            isSpread: !isSpread
        })
    }

    componentWillReceiveProps(nextProps) {
        const { activeIndex } = nextProps
       /* console.log(activeIndex)*/
        if(activeIndex === 0) {
             this.setState({
                fixed: false
            })
        }
    }
    



    render() {
        const { _this, activeIndex } = this.props
        const { navArr, fixed, isSpread } = this.state
        /*if(activeIndex) {
            console.log(activeIndex)
        }*/

        const navs = navArr.map((item, index) => {
            return (
                <li key={index} className={classNames('nav', {active: activeIndex === index})}
                onClick={() => {this._toggle();_this._chooseNav(index)}}>
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
                    <ul className={classNames('navs', { spread: isSpread })}>
                        {navs ? navs : null}
                    </ul>
                    <a href="javascript:;" className={classNames('toggle', {active: isSpread})} 
                    onClick={() => { this._toggle() }}>
                        <i className="bar"></i>
                    </a>
               </div>
            </NavDiv>
        )
    }
}
