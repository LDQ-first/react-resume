import React, { Component } from 'react'
import * as homeActions from '../../redux/actions/home.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    
} from '../../selector/home.js'
import HomeDiv from '../../styled/Home.js'
import Header from '../../components/Header/Header.js'
import classNames from 'classnames'


class Home extends Component {
    static get propTypes() { 
        return { 
           
        }
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
            ],
            imgIndex: 0
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

    render() {

        const {imglists, imgIndex} = this.state

        const Imglists = imglists.map((imglist, index) => {
            return (
                <img key={index} src={imglist} className={classNames('imglist', {hide: index === imgIndex})}/>
            )
        })

        
        return (
            <HomeDiv>
                <div className="bgImg-list">
                    {Imglists}
                </div>
                <div className="home">
                    home
                </div>
            </HomeDiv>
        )
    }
}


const mapStateToProps = (state) => ({
    
})


export default connect(
    mapStateToProps,
   
)(Home)