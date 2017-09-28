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



const ProjectDiv = styled.div`
    padding: 4em 0;
    background: #364d79;

    .projectContent {
        padding: 1em 0;
        .title {
            max-width: 900px;
            margin: 0 auto;
            margin-bottom: 240px;
            text-align: center;
            color: #FFF;
            font-size: 20px;
        }
        .projects {
            .ant-carousel {
                width: 500px;
                margin: 0 auto;
                @media (max-width: 415px) {
                    width: 100%;
                }
            }
            .ant-carousel .slick-list {
                overflow: visible;
                .slick-track {
                    
                }
            }
            .ant-carousel .slick-slide {
                text-align: center;
                background: #364d79;       
            }

            .ant-carousel .slick-slide h3 {
                color: #fff;
            }
            .ant-carousel .slick-dots {
                bottom: -32px;
                height: 8px;
                li {
                    button {
                        width: 32px;
                        height: 8px;
                    }
                }
            }
            .project {
              padding: 0 2em;
              transform: scale(0.85);
              transition: 0.5s;
              &.slick-active {
                  transform: scale(1);
              }
              &.more {
                  .project-item {
                      height: 400px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-size: 10em;
                      padding: 0;
                  }
              }
              .project-item {
                  background: #FFF;
                  font-size: 16px;
                  position: relative;
                  padding-top: 100px;
                  box-shadow: 0 0 4px 2px rgba(31, 150, 255, 0.2), 
                              0 2px 6px 2px rgba(0, 132, 248, 0.3), 
                              0px 10px 30px  rgba(0, 0, 0, 0.19),
                              0px 6px 10px rgba(0, 0, 0, 0.23);
                  .img {
                      height: 320px;
                      width: 90%;
                      position: absolute;
                      left: 50%;
                      margin-left: -45%;
                      top: -120px;
                      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
                      transition: all 0.3s ease-in-out;
                      &:hover {
                          transform: translate3d(0, -30%, 0);
                      }
                  }
                  .project-detail {
                      padding: 1em;
                      position: relative;
                      z-index: 100;
                      background: #FFF;
                      border-bottom: 2px solid #CCC;
                      &::before {
                          content: '';
                          width: 100%;
                          height: 30px;
                          background: rgba(255, 255, 255, 1);
                          position: absolute;
                          top: -10px;
                          left: 0;
                          box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.5);
                          /*border-radius: 0 0 0 0 / 0 0 0 0;*/
                      }
                      .header {
                          text-align: left;
                          border-bottom: 2px solid #4AE3B5;
                          padding-bottom: 0.5em;
                          .icon {
                             margin-left: 0.5em;
                          }
                          .detail-title {
                              .detail-title-link {
                                  
                              }
                              
                          }
                          .sourceCode {
                              .sourceCode-link {
                                  
                              }
                              .icon {

                              }
                          }
                      }
                      .detail-content {
                          .detailContents {
                              .detailContent {
                                  margin: 1em 0;
                                  text-align: left;
                                  .detailContent-p {
                                      .detailContent-p-title {
                                          font-weight: bold;
                                          color: #1E88E5;
                                      }
                                  }
                              }
                          }
                      }

                     
                  }
                   .project-technology {
                       .technologyContents {
                           padding: 0 0.5em;
                           display: flex;
                           align-items: center;
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
                                   
                               }
                           }
                       }
                   }
              }
            }
        }
        
    }
    
    
`

export default ProjectDiv