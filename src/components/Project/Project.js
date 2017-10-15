import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  ProjectDiv  from '../../styled/Project.js'
/*import  {Carousel} from 'antd'*/
import { Icon } from 'antd'
import classNames from 'classnames'

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
                    review: '//ldqblog.me/react-eyepetizer/dist/#/',
                    sourceCode: 'https://github.com/LDQ-first/react-eyepetizer',
                    title: 'React全家桶版开眼',
                    img: '//ldqblog.me/work/img/All/02.jpg',
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
                            link: `http://es6.ruanyifeng.com/`,
                            className: `i-es6`
                        },
                        { 
                            link: `https://webpack.github.io/`,
                            className: `i-webpack`
                        },
                    ]
                },
                {
                    review: '//ldqblog.me/vue-CNode/dist/#/',
                    sourceCode: 'https://github.com/LDQ-first/vue-CNode',
                    title: 'Vue全家桶版CNode社区',
                    img: '//ldqblog.me/work/img/All/03.jpg',
                    content: [
                        `Vue全家桶 + SASS + Axios + Webpack`,
                        `实现了登录，回复，发帖，收藏，点赞，查看消息，更换主题色，退出等功能`,
                        `Axios处理异步请求，滚动加载更多，使用使用Vuex实现更换主题色`
                    ],
                    icon: [
                        { 
                            link: `https://cn.vuejs.org/`,
                            className: `i-vue`
                        },
                        { 
                            link: `http://www.sass.hk/`,
                            className: `i-sass`
                        },
                        { 
                            link: `http://es6.ruanyifeng.com/`,
                            className: `i-es6`
                        },
                        { 
                            link: `https://webpack.github.io/`,
                            className: `i-webpack`
                        },
                    ]
                },
                {
                    review: 'http://39.108.141.131/vueshop/#/',
                    sourceCode: 'https://github.com/LDQ-first/Vue-shop',
                    title: 'Vue全家桶 + Express + MongoDB 开发的简单商城',
                    img: '//ldqblog.me/work/img/All/04.jpg',
                    content: [
                        `Vue全家桶 + Express + MongoDB + Mongoose + SASS + Axios + Echarts + Webpack`,
                        `实现登录，注册，添加删除购物车，添加删除地址，完成订单，查看订单详情， 下拉刷新等功能`,
                        `前后端的联系， 阿里云部署Node和MongoDB，Nginx代理转发，pm2实现快速部署和守护进程`,
                        `阿里云 + Express + MongoDB + Nginx`
                    ],
                    icon: [
                        { 
                            link: `https://cn.vuejs.org/`,
                            className: `i-vue`
                        },
                        { 
                            link: `http://www.sass.hk/`,
                            className: `i-sass`
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
                    ]
                },
                {
                    review: '//ldqblog.me/react-animating-resume/build/',
                    sourceCode: 'https://github.com/LDQ-first/react-animating-resume',
                    title: 'React.js 版的动态响应式简历',
                    img: '//ldqblog.me/work/img/RAResume/001.jpg',
                    content: [
                        `React.js`,
                        `利用 Async/Await Promise 实现按步骤绘制动态简历，实现了加速、播放、暂停、跳过、重来、下载PDF等功能`,
                        `async/await 处理异步，动态添加css，markdown`
                    ],
                    icon: [
                         { 
                            link: `https://facebook.github.io/react/`,
                            className: `i-react`
                        },
                        { 
                            link: `https://www.styled-components.com/`,
                            className: `i-styled-components`
                        },
                        { 
                            link: `http://es6.ruanyifeng.com/`,
                            className: `i-es6`
                        },
                        { 
                            link: `http://www.appinn.com/markdown/`,
                            className: `i-markdown`
                        },
                        { 
                            link: `https://webpack.github.io/`,
                            className: `i-webpack`
                        },
                    ]
                },
                {
                    review: '//ldqblog.me/vue-animating-resume/dist/',
                    sourceCode: 'https://github.com/LDQ-first/vue-animating-resume',
                    title: 'Vue.js 版的动态响应式简历',
                    img: '//ldqblog.me/work/img/VAResume/001.jpg',
                    content: [
                        `Vue.js`,
                        `利用 Async/Await Promise 实现按步骤绘制动态简历，实现了加速、播放、暂停、跳过、重来、下载PDF等功能`,
                        `async/await 处理异步，动态添加css，markdown`
                    ],
                    icon: [
                        { 
                            link: `https://cn.vuejs.org/`,
                            className: `i-vue`
                        },
                        { 
                            link: `http://www.sass.hk/`,
                            className: `i-sass`
                        },
                        { 
                            link: `http://es6.ruanyifeng.com/`,
                            className: `i-es6`
                        },
                        { 
                            link: `http://www.appinn.com/markdown/`,
                            className: `i-markdown`
                        },
                        { 
                            link: `https://webpack.github.io/`,
                            className: `i-webpack`
                        },
                    ]
                },
            ]
        }
    }




    
    componentDidUpdate(prevProps, prevState) {
         const {_this} = this.props
         /*console.log(this._project)
         console.log(this._project.offsetTop)*/
         _this._setTopData(2, this._project.offsetTop)
    }

    
    

    render() {

        const { projectArr } = this.state

        const projects = projectArr.map((project, index) => {

            let contents = null
            if( project.content && project.content instanceof Array ) {
                 contents = project.content.map((content, i) => {
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
             }

            let technologys = null
            if(project.icon && project.icon instanceof Array) {
                 technologys = project.icon.map((icon, j) => {
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
                <div key={index} className="project">
                    <div className="project-item">
                        <div className="img" 
                             style={{
                                background: `url(${project.img}) no-repeat center/cover`
                         }}>
                            <div className="overlay">
                               <h3 className="overlay-title">{ project.title }</h3>
                                <p className="overlay-content">
                                    <a className="detail-title-link link" href={project.review} target="_blank">
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref="#icon-lianjie"></use>
                                        </svg>
                                    </a>
                                    <a className="sourceCode-link link"  href={project.sourceCode} target="_blank">
                                        <svg className="icon github" aria-hidden="true">
                                            <use xlinkHref="#icon-github1"></use>
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="project-detail">
                            <header className="header">
                                <h3 className="detail-title">
                                    <a className="detail-title-link" href={project.review} target="_blank">
                                        { project.title }
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref="#icon-lianjie"></use>
                                        </svg>
                                    </a>
                                </h3>
                                <span className="sourceCode" title="源码">
                                    <a className="sourceCode-link"  href={project.sourceCode} target="_blank">
                                        源码
                                        <svg className="icon github" aria-hidden="true">
                                            <use xlinkHref="#icon-github1"></use>
                                        </svg>
                                    </a>
                                </span>
                            </header>
                            <div className="detail-content">
                                <ul className="detailContents">
                                    { contents ? contents : null }
                                </ul>
                            </div>
                        </div>
                        <div className="project-technology">
                            <ul className="technologyContents">
                                { technologys ? technologys : null }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })

        


        const settings = {
          
        }
    
        return (
            <ProjectDiv>
               <div className="projectContent" ref={project => this._project = project}>
                   <h2 className="title">
                    项目
                  </h2>
                  <div className="projects">
                      {/*<Carousel {...settings}>
                        { projects }
                        <div className="project more">
                            <div className="project-item">
                                <a className="moreLink" href="//ldqblog.me/work/" title="更多" 
                                target="_blank" rel="noopener noreferrer">                   
                                    <Icon type="plus" />
                                </a>
                            </div>
                        </div>
                    </Carousel>*/}
                     { projects }
                        <div className="project more">
                            <div className="project-item">
                                <a className="moreLink" href="//ldqblog.me/work/" title="更多" 
                                target="_blank" rel="noopener noreferrer">                   
                                    <Icon type="plus" />
                                </a>
                            </div>
                        </div>
                  </div>
               </div>
            </ProjectDiv>
        )
    }
}
