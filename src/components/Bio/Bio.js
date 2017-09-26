import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  BioDiv  from '../../styled/Bio.js'

export default class Bio extends Component {
    static get propTypes() {
        return {
            _this: PropTypes.object
        }
    }

    componentDidMount() {
         const {_this} = this.props
        /* console.log(this._bio)
         console.log(this._bio.offsetTop)*/
         _this._setTopData(1, this._bio.offsetTop)
    }
    

    render() {
        const {_this} = this.props
     
        return (
            <BioDiv>
              <div className="bioContent" ref={bio => this._bio = bio}>
                  <h2 className="bio">
                    简介
                  </h2>
              </div>
            </BioDiv>
        )
    }
}
