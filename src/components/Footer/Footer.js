import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  FooterDiv  from '../../styled/Footer.js'



export default class Footer extends Component {
    static get propTypes() {
        return {
             _this: PropTypes.object
        }
    }

    render() {
        const { _this } = this.props


        return (
            <FooterDiv>
                <footer className="footer" ref={footer => this._footer = footer}>
                    <p className="copyright">
                        footer
                    </p>
                    <p className="sourceCode">

                    </p>
                    <ul className="othersLink">

                    </ul>
                </footer>
            </FooterDiv>
        )
    }
}
