import styled from 'styled-components'

import react from '../../static/icon/logo-react.png'
import redux from '../../static/icon/redux.png'
import reactRouter from '../../static/icon/react-router.png'
import immutable from '../../static/icon/immutable.png'
import materialUi from '../../static/icon/material-ui.png'
import styledComponents from '../../static/icon/styled-components.png'
import es6 from '../../static/icon/es6.png'
import webpack from '../../static/icon/webpack.png'
import vue from '../../static/icon/vue.png'
import echarts from '../../static/icon/echarts.png'
import sass from '../../static/icon/sass.png'
import markdown from '../../static/icon/markdown.png'
import js from '../../static/icon/js.png'
import node from '../../static/icon/node.png'
import mongoDB from '../../static/icon/mongo.png' 
import nginx from '../../static/icon/nginx.png'




const SkillDiv = styled.div`
     padding: 4em 0;
     background: #424956;
    .skillContent {
        max-width: 900px;
        margin: 0 auto;
        .title {
            text-align: center;
            color: #FFF;
            margin-bottom: 2em;
        }
        .skill {
            padding: 0.5em;
            .skillLists {
                padding: 0 0.5em;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                background: #607D8B;
                .technologyContent {
                    padding: 0.5em 0.2em;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    .technologyContent-link {
                        width: 40px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        color: #a5a7aa;
                        transition: all 0.6s ease-in-out;
                        &:hover {
                            background: rgba(30, 136, 229, 0.8);
                            border-radius: 50%;
                        }
                        .icon {
                            line-height: 40px;
                            display: block;
                            width: 40px;
                            height: 40px;
                            margin: 0;
                        }
                    }
                }
            }
            .skillDes {
                margin: 2em 0;
                border: 2px solid #4AE3B5;
                box-shadow: 0 0 4px rgba(30, 136, 229, 0.3),
                            0 2px 6px rgba(30, 136, 229, 0.5);
                .mkWrap {
                    height: 200px;
                    overflow: hidden;
                    &.spread {
                        height: auto;
                    }
                }
                .contorolSpread {
                    background: #007FEF;
                    color: #FFF;
                    text-align: center;
                    padding: 1em 2em;
                    cursor: pointer;
                    width: 100%;
                    font-size: 18px;
                    box-shadow: 0 -2px 4px rgba( 255, 255, 255, 0.3);
                    .anticon {
                        margin: 0 1em; 
                    }
                }
            }
        }
        .i-react {
            background: url(${react}) 50% 50%/22px no-repeat;
        }
        .i-redux {
            background: url(${redux}) 50% 50%/22px no-repeat;
        }
        .i-react-router {
            background: url(${reactRouter}) 50% 50%/22px no-repeat;
        }
        .i-immutable {
            background: url(${immutable}) 50% 50%/22px no-repeat;
        }
        .i-material-ui {
            background: url(${materialUi}) 50% 50%/22px no-repeat;
        }
        .i-styled-components {
            background: url(${styledComponents}) 50% 50%/22px no-repeat;
        }
        .i-es6 {
            background: url(${es6}) 50% 50%/22px no-repeat;
        }
        .i-webpack {
            background: url(${webpack}) 50% 50%/22px no-repeat;
        }
        .i-vue {
            background: url(${vue}) 50% 50%/22px no-repeat;
        }
        .i-echarts {
            background: url(${echarts}) 50% 50%/22px no-repeat;
        }
        .i-sass {
            background: url(${sass}) 50% 50%/22px no-repeat;
        }
        .i-markdown {
            background: url(${markdown}) 50% 50%/22px no-repeat;
        }
        .i-js {
            background: url(${js}) 50% 50%/22px no-repeat;
        }
        .i-node {
            background: url(${node}) 50% 50%/22px no-repeat;
        }
        .i-mongoDB {
            background: url(${mongoDB}) 50% 50%/22px no-repeat;
        }
        .i-nginx {
            background: url(${nginx}) 50% 50%/22px no-repeat;
        }
    }
    
`

export default SkillDiv