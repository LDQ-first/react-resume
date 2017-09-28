import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  SkillDiv  from '../../styled/Skill.js'
import classNames from 'classnames'
import marked from "marked"

import asyncComponent from '../../utils/AsyncComponent.js'
import { pieOption } from '../../optionConfig/options.js'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */  '../../Echarts/PieReact.js') )  //饼图组件

import MKPre from '../../styled/Markdown.js'
import { Icon } from 'antd'

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
                ],
            isSpread: false,
            Des: 
`
## HTML CSS

- 熟悉HTML，能够书写语义合理，结构清晰，易维护的HTML结构。
- 熟悉CSS，能够高度还原设计稿，完成较为复杂的布局, 熟悉SASS等预处理工具，  
  了解Styled-components，追求优雅的设计。

## JavaScript

- 熟悉原生JS(ES3/5/6/7)，掌握常见的概念。  
  如原型，闭包，异步，面向对象，作用链，继承等。  
- 熟悉Ajax，掌握常见的跨域方式，如JSONP, CORS。
- 熟悉JavaScript框架，如Vue， React。  
  熟悉Vue，React全家桶。    
  了解Element UI，Ant Design，Material UI等  
- 熟悉ES6/7的一些常见用法，如解构赋值，箭头函数，Promise， async/await, 扩展运算符，类,  
  并在项目中应用。
- 熟悉使用Webpack构建项目脚手架，打包，优化
- 了解浏览器渲染原理，了解前端 性能优化策略。



## 后端

- 了解HTTP，有一定的Nodejs使用经验。
- 了解Express，Mongodb，能够搭建简单的后端项目。




## 对技术有追求

- 未来将更加深入的学习原生JS，
  更好的掌握JS的核心概念，     
  编程思想，如设计模式    
- 未来将更加深入的学习Vue，React，Nodejs  
- 未来将学习更多前端的其他领域，如前端工程化，前端质量体系，前端安全等
- 未来将了解学习其他相关技术，  
  移动端，如 React Native  
  桌面端，如 Electron  
  后端，如 Python, Ruby    
  可视化，如 Echarts, D3.js Three.js, WebGL  
  其他, 如 RxJs，TypeScript  
- 对算法基础也有浓厚的兴趣

            
`
        }
    }

     componentDidMount() {
         const {_this} = this.props
         /*console.log(this._skill)
         console.log(this._skill.offsetTop)*/
         _this._setTopData(3, this._skill.offsetTop)
    }
    
    _skillDes() {
          const { Des } = this.state
          return {
              __html: marked(Des) 
          }
    }

    _contorolSpread () {
        const { isSpread } = this.state
        this.setState({
            isSpread: !isSpread
        })
    }

    render() {

        const { skillLists , isSpread} = this.state

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
                          <div className={classNames('mkWrap', { spread: isSpread })}>
                              <MKPre className="mk" dangerouslySetInnerHTML= {this._skillDes()}></MKPre>
                          </div>
                          <button className="contorolSpread" onClick={() => { this._contorolSpread() }}>
                            {
                                isSpread ? 
                                <span>
                                    <Icon type="up" />
                                    收缩
                                </span> :
                                <span>
                                    <Icon type="down" />
                                    展开
                                </span> 
                            }
                          </button>
                      </div>
                  </div> 
               </div>
            </SkillDiv>
        )
    }
}
