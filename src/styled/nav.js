import styled from 'styled-components'

const NavDiv = styled.div`
   position: absolute;
   top: 0;
   width: 100vw;
   .navContent {
       max-width: 900px;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
       padding: 8px 1em;
       .logo {
            font-size: 18px;
            .name {
                font-family: Lobster,cursive;
            }
            .cv {

            }
        }
        .navs {
            display: flex;
            justify-content: flex-start;
            .nav {
                padding: 4px 1em;
                color: rgba(255, 255, 255, 0.8);
                cursor: pointer;
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background: #4AE3B5;
                    visibility: hidden;
                    transform: scaleX(0);
                    transition: all 0.3s ease-in-out 0s;
                }
                &.active {
                    color: #FFF;
                    &::before {
                        visibility: visible;
                        transform: scaleX(1);
                    }
                }
            }
        }
   }
   
`

module.exports = NavDiv
