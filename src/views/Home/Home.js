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
import Footer from '../../components/Footer/Footer.js'
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

    
    componentDidMount() {
        /* console.log(document.body.scrollTop)*/
         this._chooseNav(-1, false)       
    }
    
 
    

    _changeNavIndex() {
        const b = document.body
      //  console.log(Math.ceil(b.scrollTop))

        const {scroll, activeIndex, chooseNavIndex, setTopData} = this.props
        const scrollToJS = scroll.toJS() 

        if(Math.ceil(b.scrollTop) < scrollToJS[1] - 110 ) {
            console.log(0)
             this._chooseNav(0, false)
             return 
        }
        
        for(let i = 1; i < scrollToJS.length; i++ ) {
            const top = scrollToJS[i]
            //  console.log(Math.ceil(b.scrollTop), top - 110 - 22, top - 110 + 22)
              
            if( Math.ceil(b.scrollTop) >= top - 110 - 66 && Math.ceil(b.scrollTop) <= top - 110 + 66 ) {
               console.log(i)
               this._chooseNav(i, false)
                break;
            } 
        }
    }
    

    _setTopData (index, top) {
         const {setTopData} = this.props
         setTopData(index, top)
    }

    _chooseNav (index, isScroll = true) {
        const {chooseNavIndex, scroll} = this.props
        chooseNavIndex(index)
         if(isScroll) {
             const scrollToJS = scroll.toJS()
             this._scroll(scrollToJS[index])
         }
         if(index === -1) {
             this._scroll(0)
         }
    }

    _scroll (top) {

        const timer = setInterval(() => {
            const b = document.body
         //    console.log(Math.ceil(b.scrollTop), top - 110)

            if( b.scrollTop === 0 && top === 0) {
                this._chooseNav(0, false)
                 clearInterval(timer)
            }
            else if( Math.ceil(b.scrollTop) > top - 110 ) {
                 b.scrollTop -= 22
            } 
            else if( Math.ceil(b.scrollTop) >= top - 110 - 22 && Math.ceil(b.scrollTop) <= top - 110 + 22 ||
              Math.ceil(b.scrollTop) + b.clientHeight >= b.scrollHeight - 10 ) {
               b.scrollTop = top - 110
                clearInterval(timer)
            } 
            else {
                b.scrollTop += 22 
            }  
             
        }, 1000 / 60)
       
    }
    
    
    componentWillReceiveProps(nextProps) {
        const {scroll, activeIndex}  = nextProps
        const scrollToJS = scroll.toJS()      
        
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
                <Footer  _this={this} />
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