import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  BioDiv  from '../../styled/Bio.js'

export default class Bio extends Component {
    static get propTypes() {
        return {
            
        }
    }

    render() {
     
        return (
            <BioDiv>
              <div className="bioContent">
                  <h2 className="bio">
                    简介
                  </h2>
              </div>
            </BioDiv>
        )
    }
}
