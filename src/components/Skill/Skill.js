import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  SkillDiv  from '../../styled/Skill.js'

import asyncComponent from '../../utils/AsyncComponent.js'
import { pieOption } from '../../optionConfig/options.js'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */  '../../Echarts/PieReact.js') )  //饼图组件




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
                   <h2 className="title">
                    技能
                  </h2>
                  <div className="skill">
                      <PieReact option={ pieOption }/>
                  </div>
               </div>
            </SkillDiv>
        )
    }
}
