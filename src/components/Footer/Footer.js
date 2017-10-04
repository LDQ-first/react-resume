import React, { Component } from 'react'
import FooterDiv from '../../styled/Footer.js'
import classNames from 'classnames'



export default class Footer extends Component {

     constructor (props) {
        super(props)
        this.state = {
            date: new Date().getFullYear() === 2017 ? 2017 : `2017 ~ ${new Date().getFullYear()}`,
            others: [
                {
                    link: `http://ldq-first.github.io/vue-pdf-resume/dist/#/`,
                    icon: `PDF--`
                },
                {
                    link: `http://ldqblog.me/markdown-resume/html/%E7%AE%80%E5%8E%86.html`,
                    icon: `markdown`
                },
                {
                    link: `https://ldq-first.github.io/`,
                    icon: `bokefenxiang`
                },
            ]
        }
    }

    


    render() {
        const {date, others} = this.state

        const otherLinks = others.map((other, index) => {
            return (
                <li key={ index } className="otherLink">
                   <a href={other.link} target="_blank">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref={`#icon-${other.icon}`}></use>
                        </svg>
                   </a>
                </li>
            )
        })

        return (
            <FooterDiv>
                <p className="copyRight">
                   Copyright {date} © by 
                   <a className="githubUrl" href="https://github.com/LDQ-first" target="_blank" 
                    rel="noopener noreferrer"> LDQ-first </a> 
                    (◕ᴗ◕)
                </p>
                <p className="githubRep">
                    {`source code in Github =>`}
                    <a className="githubRepUrl" href="https://github.com/LDQ-first/react-resume" target="_blank" 
                    rel="noopener noreferrer">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-github"></use>
                        </svg>
                    </a> 
                </p>
                <ul className="otherLinks">
                    { otherLinks }
                </ul>
               
            </FooterDiv>
        )
    }
}
