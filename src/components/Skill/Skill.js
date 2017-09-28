import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  SkillDiv  from '../../styled/Skill.js'
import classNames from 'classnames'

import asyncComponent from '../../utils/AsyncComponent.js'
import { pieOption } from '../../optionConfig/options.js'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */  '../../Echarts/PieReact.js') )  //饼图组件




export default class Skill extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            skillLists: [ 
                     { 
                        link: `https://facebook.github.io/react/`,
                        className: `i-react`
                    },
                    { 
                        link: `http://redux.js.org/`,
                        className: `i-redux`
                    },
                    { 
                        link: `https://reacttraining.com/react-router/`,
                        className: `i-react-router`
                    },
                    { 
                        link: `https://facebook.github.io/immutable-js/`,
                        className: `i-immutable`
                    },
                    { 
                        link: `http://www.material-ui.com/#/`,
                        className: `i-material-ui`
                    },
                    { 
                        link: `https://www.styled-components.com/`,
                        className: `i-styled-components`
                    },
                    { 
                        link: `https://cn.vuejs.org/`,
                        className: `i-vue`
                    },
                    { 
                        link: `http://www.sass.hk/`,
                        className: `i-sass`
                    },
                    { 
                        link: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
                        className: `i-js`
                    },
                    { 
                        link: `http://es6.ruanyifeng.com/`,
                        className: `i-es6`
                    },
                    { 
                        link: `https://webpack.github.io/`,
                        className: `i-webpack`
                    },
                    { 
                        link: `https://nodejs.org/en/`,
                        className: `i-node`
                    },
                    { 
                        link: `https://www.mongodb.com/`,
                        className: `i-mongoDB`
                    },
                    { 
                        link: `http://nginx.org/`,
                        className: `i-nginx`
                    },
                    { 
                        link: `http://echarts.baidu.com/`,
                        className: `i-echarts`
                    },
                    { 
                        link: `http://www.appinn.com/markdown/`,
                        className: `i-markdown`
                    },
                ]
        }
    }

     componentDidMount() {
         const {_this} = this.props
         /*console.log(this._skill)
         console.log(this._skill.offsetTop)*/
         _this._setTopData(3, this._skill.offsetTop)
    }
    

    render() {

        const { skillLists } = this.state

        let technologys = null
            if(skillLists && skillLists instanceof Array) {
                 technologys = skillLists.map((icon, j) => {
                    return (
                        <li key={j} className="technologyContent">
                            <a href={ icon.link } className="technologyContent-link"
                            target="_blank" rel="noopener noreferrer">
                                <i className={classNames(`icon`, icon.className)}></i>
                            </a>
                        </li>
                    )
                })
            }

    
        return (
            <SkillDiv>
               <div className="skillContent" ref={skill => this._skill = skill}>
                   <h2 className="title">
                    技能
                  </h2>
                  <div className="skill">
                      <PieReact option={ pieOption }/>
                      <ul className="skillLists">
                          { technologys ? technologys : null }
                      </ul>
                      <div className="skillDes">
                          
                      </div>
                  </div> 
               </div>
            </SkillDiv>
        )
    }
}
