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

        const b =  document.body
        const d =  document.documentElement
        if(b.scrollTop > b.clientHeight - 400 || 
           d.scrollTop > d.clientHeight - 400) {
            this.setState({
                fixed: true
            })
        }
       

        const scrollFun = () => {
             const { _this } = this.props
           /*  console.log(b.scrollTop, b.clientHeight - 420)*/
             if(b.scrollTop > b.clientHeight - 400 || 
                d.scrollTop > d.clientHeight - 400) {
               /*  console.log(d.scrollTop > d.clientHeight - 420)*/
                this.setState({
                    fixed: true
                })
            } else {
                this.setState({
                    fixed: false
                })
            }
            _this._changeNavIndex()
             /*console.log(b.scrollTop)*/
           /*  console.log(d.scrollTop)*/
            
           /* console.log('scroll')*/
        }
        document.addEventListener('touchmove', scrollFun, false)
       /* window.onmousewheel = document.onmousewheel = scrollFun*/
      /*  document.body.addEventListener('mousewheel', scrollFun, false)*/
        window.addEventListener('scroll', scrollFun, false)
       document.documentElement.addEventListener('mousewheel', scrollFun, false)
      

    }

    
    componentDidMount() {
        const { _this } = this.props
        window.addEventListener('resize', () => {
            this._hideNavToggle()
            _this._resetComTop()
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

    _hideNavToggle () {
         const { isSpread } = this.state
        if(window.innerWidth > 768 && isSpread) {
            this.setState({
                isSpread: false
            })
        }
    }

    _toggle () {
       /* console.log(window.innerWidth)*/
        const { isSpread } = this.state
        if(window.innerWidth <= 768) {
            this.setState({
                isSpread: !isSpread
            })
        } 
        
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
