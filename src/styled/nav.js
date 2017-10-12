import styled from 'styled-components'

const NavDiv = styled.div`  
   position: absolute;
   top: 0;
   width: 100vw;
   &.fixed {
       position: fixed;    
       z-index: 1000;   
       top: 0;
       background: #FFF;
       box-shadow: 0px 2px 4px -1px rgba(122, 193, 249, 0.2),
                   0px 4px 5px 0px rgba(122, 193, 249, 0.14),
                   0px 1px 10px 0px rgba(122, 193, 249, 0.12);
       .logo {
            color: #2196F3;
            .name {
                
            }
            .cv {

            }
        }
       .navContent {

           &.active {
                background: transparent;
            }
           .navs {
               .nav {
                    color: rgba(0, 0, 0, 0.5);
                    &.active {
                        color: #2196F3;
                    }
                }
                
               
           }
            @media (max-width: 768px) {    
                    .navs {
                        background: #FFF;
                        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                                    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                                    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
                        &.spread {
                            background: #FFF;
                            height: auto;
                            .nav {
                                 display: block;
                            }
                        }
                    }

            }
            
       }
       
   }
   .navContent {
       max-width: 900px;
       display: flex;
       justify-content: space-between;
       padding: 8px 1em;
       margin: 0 auto;
       transition: all 0.3s linear;
       position: relative;
       left: 0;
       &.active {
             background: rgba(0, 0, 0, 0.2);
        }
       .logo {
            padding: 4px 1em;
            font-size: 18px;
            .name {
                font-family: Lobster,cursive;
            }
            .cv {

            }
        }
        .navs {
            transition: all 0.3s linear;
            display: flex;
            justify-content: flex-start;
            .nav {
                padding: 4px 1em;
                color: rgba(255, 255, 255, 0.8);
                cursor: pointer;
                position: relative;
                display: flex;
                align-items: center;
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
            @media (max-width: 768px) {
                position: absolute;
                top: 100%;
                left: 0;
                flex-direction: column;
                width: 100%;
                padding: 0.5em;
                height: 0;
                opacity: 0;
                &.spread {
                    opacity: 1;
                    background: rgba(0, 0, 0, 0.2);
                    height: calc(100vh - 60%);
                    .nav {
                         display: block;
                    }
                }
                .nav {
                     padding: 1em;
                     display: none;
                     &.active {
                        &::before {
                            background: transparent;
                        }
                    }
                }
            }
        }
        .toggle {
            display: none;
            padding: 6px 0 0 0;
            height: 44px;
            width: 44px;
            margin-right: 1em;
            @media (max-width: 768px) {
                display: block;
            }
            &:hover {
                .bar {
                    &::before {
                        top: -10px;
                    }
                    &::after {
                        bottom: -10px;
                    }
                }
            }
            &.active {
                .bar {
                    background: transparent;
                    &::before {
                        top: 0px;
                        transform: rotateZ(45deg);
                    }
                    &::after {
                        bottom: 0px;
                        transform: rotateZ(-45deg);
                    }
                }
            }
            .bar {
                position: relative;
                left: 50%;
                margin-left: -12.5px;
                display: inline-block;
                width: 25px;
                height: 3px;
                background: #4AE3B5;
                transition: all .2s ease-out;
                &::before, &::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    margin-left: -12.5px;
                    width: 25px;
                    height: 3px;
                    background: #4AE3B5;
                    transition: 0.2s;
                }
                &::before {
                    top: -7px;
                }
                &::after {
                    bottom: -7px;
                }
            }
        }
   }
   
`

module.exports = NavDiv
