import React, { Component } from 'react'
import * as homeActions from '../../redux/actions/home.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    scrollSelector,
    activeNavIndexSelector
} from '../../selector/home.js'
import HomeDiv from '../../styled/Home.js'
import Header from '../../components/Header/Header.js'
import classNames from 'classnames'


class Home extends Component {
    static get propTypes() { 
        return { 
           scroll: PropTypes.array,
           activeNavIndex: PropTypes.number
        }
    }

    constructor (props) {
        super(props)
        this.state = {
           
        }
    }

   

    render() {

       const {scroll, activeNavIndex} = this.props
       if(scroll && activeNavIndex) {
           console.log(scroll, activeNavIndex)
       }
       
        
        return (
            <HomeDiv>
                <Header />
                <div className="home">
                    home
                </div>
            </HomeDiv>
        )
    }
}


const mapStateToProps = (state) => ({
    scroll: scrollSelector(state),
    activeNavIndex: activeNavIndexSelector(state)
})


export default connect(
    mapStateToProps,
    homeActions
)(Home)