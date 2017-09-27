import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  ContactDiv  from '../../styled/Contact.js'

export default class Contact extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object
        }
    }

     componentDidMount() {
         const {_this} = this.props
         /*console.log(this._contact)
         console.log(this._contact.offsetTop)*/
         _this._setTopData(5, this._contact.offsetTop)
    }
    

    render() {
    
        return (
            <ContactDiv>
               <div className="contactContent" ref={contact => this._contact = contact}>
                   <h2 className="contact">
                    联系方式
                  </h2>
               </div>
            </ContactDiv>
        )
    }
}
