import {injectGlobal} from 'styled-components'
import styled from 'styled-components'
import { lightBlue, deepPurple, blue } from 'material-ui/colors'
const bgBlue = lightBlue[400]
const bgPurple = deepPurple[200]
const mainBlue = blue[500]
const svgBlue = blue[600]







export default injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        height: 100vh;
        overflow: auto;
    }
    body {
        height: 100vh;
        line-height: 1.6;
        min-width: 320px;
        color: #2c3e50;
        /*background: linear-gradient(135deg, 
            rgba(78, 167, 224, 1) , 
            rgba(182, 173, 230, 1) 70%,
            rgba(165, 153, 224, 0.6) );*/
        background: linear-gradient(135deg, ${bgBlue}, ${bgPurple});
        background-attachment: fixed;
        font-family: "Helvetica Neue", "Arial", " Segoe UI",
                     "PingFang SC", "Hiragino Sans GB", "STHeiti",
                      "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", 
                      "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", 
                      "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei",
                      SimSun, sans-serif !important;
    }
    ::-webkit-scrollbar {
        width: 0.5em
    }

    ::-webkit-scrollbar-track {
        border-radius: 0.25em;
        background: #ceb9d1
    }

    ::-webkit-scrollbar-thumb {
       /* height: 0.5em;*/
        border-radius: 0.25em;
        background: #498bd6 linear-gradient(180deg,#fff,rgba(3,169,244,.5),#0277bd)
    }
    ::-webkit-scrollbar-track-piece {
        
    }
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: #0060E9;
        &:hover, &:hover * {
            color: #3f51b5;
        }
    }
    button {
        display: inline-block;
        cursor: pointer;
        border: none;
        outline: none;
        -webkit-appearance: none;
    }
    #app {
        overflow-x: hidden;
    }
    .icon {
        width: 1.6em; height: 1.6em;
        vertical-align: middle;
        fill: #2196F3;
        overflow: hidden;
        border-radius: 50%;
        padding: 2px;
        margin-right: 3px;
        cursor: pointer;
        &:hover {
            animation: shakeIcon 1s ease-in;
        }
        &.github {
            fill: #191717;
            /*border-color: #191717;*/
        }
        &.markdown {
            fill: #50C28B;
           /* border-color: #50C28B;*/
        }
    }
    
    svg {
        fill: ${svgBlue} !important;
    }
    .fade-enter {
        opacity: 0.01;
        transform: translateY(-100%);
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 500ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
    .textOverflow {
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    @keyframes shakeIcon {
        0% {
            transform: scale3d(1, 1, 1);
        }

        30% {
            transform: scale3d(1.25, 0.75, 1);
        }

        40% {
            transform: scale3d(0.75, 1.25, 1);
        }

        50% {
            transform: scale3d(1.15, 0.85, 1);
        }

        65% {
            transform: scale3d(.95, 1.05, 1);
        }

        75% {
            transform: scale3d(1.05, .95, 1);
        }

        100% {
            transform: scale3d(1, 1, 1);
        }
    }

    
`

const Container = styled.div`
    
    
`

module.exports = {
    Container
}