import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  ProjectDiv  from '../../styled/Project.js'
import  {Carousel} from 'antd'


export default class Project extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            projectArr: [
                {
                    review: 'http://ldq-first.github.io/react-eyepetizer/dist/',
                    sourceCode: 'https://github.com/LDQ-first/react-eyepetizer',
                    title: 'React全家桶版开眼',
                    img: 'https://ldq-first.github.io/work/img/All/02.jpg',
                    content: [
                        `React全家桶 + Styled-components + Material-ui + Immutable + Reselect 
                        + Axios + Redux-thunk&async/await + Webpack`,
                        `实现了首页，发现，关注，搜索，热门，分类，作者，排行榜， 往期精选，
                         播放视频详情，查看评论, 查看作者详情等功能`,
                        `引入Immutable/Reselect 优化state，处理异步请求，
                            开眼API实现跨域，React全家桶脚手架搭建`
                    ],
                    icon: [ 
                        { 
                            link: ``,
                            className: ``
                        }
                    ]
                },
                {
                    review: 'https://ldq-first.github.io/vue-CNode/dist/#/',
                    sourceCode: 'https://github.com/LDQ-first/vue-CNode',
                    title: 'Vue全家桶版CNode社区',
                    img: 'https://ldq-first.github.io/work/img/All/03.jpg',
                    content: [
                        `Vue全家桶 + SASS + Axios + Webpack`,
                        `实现了登录，回复，发帖，收藏，点赞，查看消息，更换主题色，退出等功能`,
                        `Axios处理异步请求，滚动加载更多，使用使用Vuex实现更换主题色`
                    ],
                    icon: [
                        { 
                            link: ``,
                            className: ``
                        }
                    ]
                },
                {
                    review: '',
                    sourceCode: '',
                    title: '',
                    img: '',
                    content: [
                        ``,
                        ``,
                        ``,
                        ``
                    ],
                    icon: [
                        { 
                            link: ``,
                            className: ``
                        }
                    ]
                },
                {
                    review: '',
                    sourceCode: '',
                    title: '',
                    img: '',
                    content: [
                        ``,
                        ``,
                        ``
                    ],
                    icon: [
                        { 
                            link: ``,
                            className: ``
                        }
                    ]
                },
                {
                    review: '',
                    sourceCode: '',
                    title: '',
                    img: '',
                    content: [
                        ``,
                        ``,
                        ``
                    ],
                    icon: [
                        { 
                            link: ``,
                            className: ``
                        }
                    ]
                }
            ]
        }
    }

     componentDidMount() {
         const {_this} = this.props
         /*console.log(this._project)
         console.log(this._project.offsetTop)*/
         _this._setTopData(2, this._project.offsetTop)
    }
    

    render() {

        const { projectArr } = this.state

        const projects = projectArr.map((project, index) => {

            const contents = project.content.map((content, i) => {
                return (
                    <li key={i} className="detailContent">
                        { 
                            i === 0 ? 
                            <p className="detailContent-p">
                                <span className="detailContent-p-title">技术栈：</span>
                                { content }
                            </p> : 
                            i === 1 ? 
                            <p className="detailContent-p">
                                <span className="detailContent-p-title">内容：</span>
                                { content }
                            </p> : 
                            i === 2 ?
                            <p className="detailContent-p">
                                <span className="detailContent-p-title">难点：</span>
                                { content }
                            </p> :
                            i === 3 ?
                            <p className="detailContent-p">
                                <span className="detailContent-p-title">部署：</span>
                                { content }
                            </p> : null
                        }
                    </li>
                )
            })

            const technologys = project.icon.map((icon, j) => {
                return (
                    <li key={j} className="technologyContent">
                        <a href={ icon.link } className="technologyContent-link">
                            <i className={ icon.className }></i>
                        </a>
                    </li>
                )
            })


            return (
                <div key={index} className="project">
                    <div className="project-item">
                        <div className="img" 
                             style={{
                                background: `url(${project.img}) no-repeat center/cover`
                         }}>
                        </div>
                        <div className="project-detail">
                            <header className="header">
                                <h3 className="detail-title">
                                    <a className="detail-title-link" href={project.review} target="_blank">
                                        {project.title}
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref="#icon-lianjie"></use>
                                        </svg>
                                    </a>
                                </h3>
                                <span className="sourceCode" title="源码">
                                    <a className="sourceCode-link"  href={project.sourceCode} target="_blank">
                                        源码
                                        <svg className="icon github" aria-hidden="true">
                                            <use xlinkHref="#icon-github"></use>
                                        </svg>
                                    </a>
                                </span>
                            </header>
                            <div className="detail-content">
                                <ul className="detailContents">
                                    { contents }
                                </ul>
                            </div>
                        </div>
                        <div className="project-technology">
                            <ul className="technologyContents">
                                { technologys }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })
    
        return (
            <ProjectDiv>
               <div className="projectContent" ref={project => this._project = project}>
                   <h2 className="title">
                    项目
                  </h2>
                  <div className="projects">
                      <Carousel>
                        { projects }
                        {/*<div className="project">
                            <div className="project-item">
                                
                            </div>
                        </div>
                        <div className="project">
                           
                        </div>
                        <div className="project">
                            
                        </div>
                        <div className="project">
                            
                        </div>
                        <div className="project">
                            
                        </div>*/}
                    </Carousel>
                  </div>
               </div>
            </ProjectDiv>
        )
    }
}
