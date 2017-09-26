import React, { Component } from 'react'
import * as homeActions from '../../redux/actions/home.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    
} from '../../selector/home.js'
import HomeDiv from '../../styled/Home.js'
import Header from '../../components/Header/Header.js'



class Home extends Component {
    static get propTypes() { 
        return { 
           
        }
    }

    render() {
        
        return (
            <HomeDiv>
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