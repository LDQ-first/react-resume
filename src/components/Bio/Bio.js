import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  BioDiv  from '../../styled/Bio.js'
import { moveFunc, leaveFunc }  from '../../utils/3dHover.js'

export default class Bio extends Component {
    static get propTypes() {
        return {
            _this: PropTypes.object
        }
    }

    constructor(props) {
        super(props) 
        this.state = {
            infoArr: [
                {
                    name: '年龄',
                    icon: 'yingerchezulin',
                    content: `${new Date().getFullYear() - 1995}岁`
                },
                {
                    name: '学历',
                    icon: 'jiaoyu01',
                    content: ['广东工业大学', '本科(2018届)', '计算机科学与技术', '英语四级'] 
                },
                {   
                    name: '手机',
                    icon: 'shouji',
                    content: '18826136763'
                },
                {
                    name: '微信',
                    icon: 'wechat-copy',
                    content: '18826136763'
                },
                {
                    name: '163邮箱',
                    icon: 'youxiang',
                    content: '18826136763@163.com'
                },
                {
                    name: 'QQ邮箱',
                    icon: 'youxiang',
                    content: '2320975287@qq.com'
                },
                {
                    name: 'Github',
                    icon: 'github',
                    content: <a href="https://github.com/LDQ-first" target="_blank" 
                    rel="noopener noreferrer">LDQ-first</a>
                },
                {
                    name: '博客',
                    icon: 'bokefenxiang',
                    content: <a href="//ldqblog.me" target="_blank" 
                    rel="noopener noreferrer">博客</a>
                },
                {
                    name: 'PDF简历',
                    icon: 'PDF--',
                    content:  <a href="//ldqblog.me/vue-pdf-resume/dist/#/" target="_blank" 
                    rel="noopener noreferrer">PDF简历</a>
                },
            ]
        }
    } 


    componentDidUpdate(prevProps, prevState) {
           const {_this} = this.props
        /* console.log(this._bio)
         console.log(this._bio.offsetTop)*/
         _this._setTopData(1, this._bio.offsetTop)
    }
    
    

    render() {
        const { _this } = this.props
        const { infoArr } = this.state

        let infos = infoArr.map((info, index) => {

            let contents = null
            if(info.content instanceof Array) {
                 contents = info.content.map((content, index) => {
                     return (
                         <p key={index} className="content" >
                            {content}
                         </p>
                     )
                 })
            }
           


            return (
                <li key={index} className="info">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref={`#icon-${info.icon}`}></use>
                    </svg>
                    <span className="name">{info.name}</span>
                    { 
                        contents 
                        ?  <div className="contentWrap">
                            {contents}
                           </div> 
                        :  <p className="content">{info.content}</p>
                    }
                </li>
            )
        })



     
        return (
            <BioDiv>
              <div className="bioContent" ref={bio => this._bio = bio}>
                  <h2 className="title">
                    简介
                  </h2>
                  <div className="bio">
                      <div className="avatarWrap">
                          <div className="avatarContent" 
                          onMouseMove={ (e) => moveFunc(e) }
                          onMouseLeave={ (e) => leaveFunc(e) } >
                             <div className="avatar" title="刘德铨"></div>
                             <div className="avatar-content" >
                                <div className="name-job">
                                      <h2 className="name">刘德铨</h2>
                                      <p className="job">前端工程师</p>
                                </div>
                             </div>
                          </div>
                      </div>
                      <div className="infoWrap">
                          <h2 className="info-title">
                            个人信息
                          </h2>
                         <ul className="infos">
                            { infos ? infos : null }
                         </ul>
                      </div>
                  </div>
                  <div className="desWrap">
                        <p className="des">一个充满热情，有耐心，有强大自我驱动力的前端工程师</p>
                    </div>
              </div>
            </BioDiv>
        )
    }
}
