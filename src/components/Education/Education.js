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
                   <h2 className="title">
                    教育
                  </h2>
                  <div className="educationWrap">
                        <div className="education">
                            <div className="birth">
                                <svg className="icon yingerchezulin" aria-hidden="true">
                                    <use xlinkHref="#icon-yingerchezulin"></use>
                                </svg>
                                <h3 className="time">1995</h3>
                            </div>
                            <div className="college">
                                <h3 className="time">2014 ~ 2018</h3>
                                <p className="content">  
                                    <span className="school text">广东工业大学</span>
                                    <span className="major text">计算机科学与技术</span>
                                    <span className="degree text">本科</span>
                                    <span className="english text">英语四级</span>
                                </p>  
                                <svg className="icon jiaoyu01" aria-hidden="true">
                                    <use xlinkHref="#icon-jiaoyu01"></use>
                                </svg>
                            </div>
                        </div>
                  </div>
               </div>
            </EducationDiv>
        )
    }
}
