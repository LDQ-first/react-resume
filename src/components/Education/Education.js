import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  EducationDiv  from '../../styled/Education.js'

export default class Education extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object
        }
    }

     componentDidMount() {
         const {_this} = this.props
         /*console.log(this._education)
         console.log(this._education.offsetTop)*/
         _this._setTopData(4, this._education.offsetTop)
    }
    

    render() {
    
        return (
            <EducationDiv>
               <div className="educationContent" ref={education => this._education = education}>
                   <h2 className="education">
                    教育
                  </h2>
               </div>
            </EducationDiv>
        )
    }
}
