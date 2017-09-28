import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const FooterDiv = styled.div`
    height: 250px;
    background: #2791D5;
    font-size: 14px;
    padding: 55px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-center: center;
    color: #FFF;
    .copyRight {
        text-align: center;
        letter-spacing: 2px;
        .githubUrl {
            color: #673ab7;
            margin: 0 10px;
        }
    }
    .githubRep {
        text-align: center;
        letter-spacing: 2px;
        .githubRepUrl {
            color: #673ab7 !important;
            .icon {
                fill: #673ab7 !important;
                width: 30px;
                height: 30px;
                vertical-align: bottom;
                margin: 0 10px;
                transform-origin: 50% 100%;
                animation: githubSway 2s ease-in-out infinite alternate;
                @keyframes githubSway {
                    0% {
                        transform: rotate(-35deg);
                    }
                    100% {
                        transform: rotate(35deg);
                    }
                }
            
            }
        }
        
    }
    .otherLinks {
        margin-top: 2em;
        display: flex;
        justify-content: space-around;
        .otherLink {
            .icon {
                font-size: 24px;
                border-radius: 0;
                fill: #673ab7 !important;
            }
        }
    }
`

export default FooterDiv