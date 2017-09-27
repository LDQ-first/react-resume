import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  SkillDiv  from '../../styled/Skill.js'

export default class Skill extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object
        }
    }

     componentDidMount() {
         const {_this} = this.props
         /*console.log(this._skill)
         console.log(this._skill.offsetTop)*/
         _this._setTopData(3, this._skill.offsetTop)
    }
    

    render() {
    
        return (
            <SkillDiv>
               <div className="skillContent" ref={skill => this._skill = skill}>
                   <h2 className="skill">
                    技能
                  </h2>
               </div>
            </SkillDiv>
        )
    }
}
