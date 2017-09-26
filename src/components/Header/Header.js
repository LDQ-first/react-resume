import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  HeaderDiv  from '../../styled/Header.js'
import Navs from '../Nav/Nav.js'
import classNames from 'classnames'

export default class Header extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object,
           activeIndex: PropTypes.number,
        }
    }

     componentWillMount() {
        this._showBgImg()
    }

    _showBgImg() {
        const {imglists} = this.state
        let i = 0
        setInterval(() => {
            i = i < imglists.length - 1 ? i + 1 : 0 
            this.setState({
                imgIndex: i
            })
        }, 10000)
    }


     componentDidMount() {
         const {_this} = this.props
/*         console.log(this._header)
         console.log(this._header.offsetTop)*/
         _this._setTopData(0, this._header.offsetTop)
    }

    constructor (props) {
        super(props)
        this.state = {
            imglists: [
                'http://ldq-first.github.io/react-resume/static/img/Header/001.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/002.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/003.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/004.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/005.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/006.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/007.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/008.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/009.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/010.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/011.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/012.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/013.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/014.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/015.jpg',
                'http://ldq-first.github.io/react-resume/static/img/Header/016.jpg',
            ],
            imgIndex: 0
        }
    }

    render() {

        const {_this, activeIndex} = this.props
        const {imglists, imgIndex} = this.state

        const Imglists = imglists.map((imglist, index) => {
            return (
                <img key={index} src={imglist} className={classNames('imglist', {hide: index === imgIndex})}/>
            )
        })
        
       
        


       
        return (
            <HeaderDiv>
                <div className="headerWrap" ref={header => this._header = header}>
                    <div className="bgImg-list">
                        {Imglists}
                    </div>
                    <Navs _this={_this} activeIndex={activeIndex} />
                    <div className="headerContent">
                        <h1 className="title">
                        你好！我是 <span className="name">刘德铨</span>
                        </h1>
                        <h2 className="job">求职：前端工程师</h2>
                    </div>
                </div>
            </HeaderDiv>
        )
    }
}
