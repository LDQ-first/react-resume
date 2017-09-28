import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  ContactDiv  from '../../styled/Contact.js'



export default class Contact extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object
        }
    }

      constructor(props) {
        super(props) 
        this.state = {
            contactArr: [
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
                }
            ]
        }
    } 

     componentDidMount() {
         const {_this} = this.props
         /*console.log(this._contact)
         console.log(this._contact.offsetTop)*/
         _this._setTopData(5, this._contact.offsetTop)
    }
    

    render() {

         const { contactArr } = this.state


          let contacts = contactArr.map((contact, index) => {

            let contents = null
            if(contact.content instanceof Array) {
                 contents = contact.content.map((content, index) => {
                     return (
                         <p key={index} className="content">
                            {content}
                         </p>
                     )
                 })
            }
           


            return (
                <li key={index} className="contact">
                    <div className="title">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref={`#icon-${contact.icon}`}></use>
                        </svg>
                        <span className="name">{contact.name}</span>
                    </div>
                    { 
                        contents 
                        ?  <div className="contentWrap">
                            {contents}
                           </div> 
                        :  <p className="content">{contact.content}</p>
                    }
                </li>
            )
        })
    
        return (
            <ContactDiv>
               <div className="contactContent" ref={contact => this._contact = contact}>
                   <h2 className="title">
                    联系方式
                  </h2>
                  <div className="contactWrap">
                      <div className="centerArea">
                          centerArea
                      </div>
                      <ul className="contacts">
                          { contacts }
                      </ul>
                  </div>
               </div>
            </ContactDiv>
        )
    }
}
