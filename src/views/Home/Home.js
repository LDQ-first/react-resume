import React, { Component } from 'react'
import * as homeActions from '../../redux/actions/home.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
    scrollSelector,
    activeIndexSelector
} from '../../selector/home.js'
import HomeDiv from '../../styled/Home.js'
import Header from '../../components/Header/Header.js'
import Bio from '../../components/Bio/Bio.js'
import Project from '../../components/Project/Project.js'
import Skill from '../../components/Skill/Skill.js'
import Education from '../../components/Education/Education.js'
import Contact from '../../components/Contact/Contact.js'
import { toJS } from 'immutable'

class Home extends Component {
    static get propTypes() { 
        return { 
           scroll: PropTypes.array,
           activeIndex: PropTypes.number,

           setTopData: PropTypes.func,
           chooseNavIndex: PropTypes.func,


        }
    }

    constructor (props) {
        super(props)
        this.state = {
           isFixed: false
        }
    }

    
    componentWillMount() {
        
    }
    

    _setTopData (index, top) {
         const {setTopData} = this.props
         setTopData(index, top)
    }

    _chooseNav (index) {
        const {chooseNavIndex} = this.props
        chooseNavIndex(index)
    }

    _scroll (top) {
        const timer = setInterval(() => {
            const b = document.body
            console.log(b.scrollTop, top)
             if(top >=  b.scrollTop) {
                  if( b.scrollTop >= top - 120  ||   b.scrollTop + b.clientHeight >= b.scrollHeight - 10 ) {
                        clearInterval(timer)
                    }
                    else {
                        b.scrollTop +=  22
                    }
             }
            else {
                if(b.scrollTop <= top + 22 || b.scrollTop <= 50) {
                    b.scrollTop = 0
                    clearInterval(timer)
                }
                else {
                    b.scrollTop -=  22
                }
            }
            
             
        }, 1000 / 60)
       
    }
    
    
    componentWillReceiveProps(nextProps) {
        const {scroll, activeIndex}  = nextProps
        const scrollToJS = scroll.toJS()      
        if(activeIndex !== this.props.activeIndex) {
            this._scroll(scrollToJS[activeIndex])
        }
    }



    
    

    render() {

       const {scroll, activeIndex, chooseNavIndex, setTopData} = this.props
       const { isFixed } = this.state
       /*if(scroll ) {
           console.log(scroll)
       }
       
       if(activeIndex) {
            console.log(activeIndex)
        }*/
        
        return (
            <HomeDiv>
                <Header _this={this} activeIndex = {activeIndex}/>
                <Bio _this={this} />
                <Project _this={this} />
                <Skill _this={this} />
                <Education _this={this} />
                <Contact _this={this} />
                <div className="home">
                    others
                </div>
            </HomeDiv>
        )
    }
}


const mapStateToProps = (state) => ({
    scroll: scrollSelector(state),
    activeIndex: activeIndexSelector(state)
})


export default connect(
    mapStateToProps,
    homeActions
)(Home)