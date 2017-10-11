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


const ProjectDiv = styled.div`
    padding: 4em 0;
    background: #364d79;

    .projectContent {
        padding: 1em 0;
        max-width: 900px;
        margin: 0 auto;
        .title {
            max-width: 900px;
            margin: 0 auto;
            margin-bottom: 4em;
            text-align: center;
            color: #FFF;
            font-size: 2em;
        }
        .projects {
            /*.ant-carousel {
                width: 580px;
                margin: 0 auto;
                @media (max-width: 620px) {
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
                bottom: -28px;
                height: 8px;
                li {
                    button {
                        width: 32px;
                        height: 8px;
                    }
                }
            }*/
            .project {
              padding: 0 2em;
              /*transform: scale(0.85);*/
              transition: 0.5s;
              margin: 0 0 4em 0;
              /*display: flex;
              justify-content: space-between;*/
               &:last-child {
                    margin-bottom: 0em;
                }
              @media (max-width: 768px) {
                padding: 0 1em;
              }
              @media (max-width: 620px) {
                padding: 0;
              }
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
                  transition: all 0.5s ease;
                  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px,
                              rgba(0, 0, 0, 0.23) 0px 6px 10px;
                 &:hover {
                     box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 60px,
                                 rgba(0, 0, 0, 0.22) 0px 15px 20px;
                    transform: translate3d(0, -5px, 0);
                 
                 }
                
                  .img {
                    height: 400px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease-in-out;
                    @media (max-width: 415px) {
                        height: 300px;
                    }
                    &:hover {
                        .overlay {
                            opacity: 1;
                            &:before {
                                opacity: 1;
                                transform: rotate3d(0,0,1,74deg);  
                            }
                            .overlay-title {
                               opacity: 1;
                                transform: scale(1);
                            }
                            .overlay-content {
                                .link {
                                    opacity: 1;
                                    transform: translate3d(0,0,0);
                                    &:first-child {
                                        
                                    }
                                    &:nth-child(2) {
                                        
                                    }
                                }
                            }
                        }
                    }
                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        transition: all 0.3s ease;
                        &::before {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 1000%;
                            background: rgba(178, 137, 251, 0.8);
                            transition: all 0.45s ease;
                            transform: rotate3d(0, 0, 1, 100deg);
                            transform-origin: 0 100%;
                        }
                        .overlay-title {
                            opacity: 0;
                            transition: all 0.35s ease;
                            transform: scale(0);
                            position: absolute;
                            top: 1em;
                            left: 1em;
                            color: #FFF;
                            text-shadow: 0 0 5px rgba(0, 132, 248, 1),
                                         0 1px 5px rgba(0, 132, 248, 1),
                                         0 2px 5px rgba(0, 132, 248, 1),
                                         0 3px 5px rgba(0, 132, 248, 1);
                        }
                        .overlay-content {
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            padding: 2em 3em;
                            @media (max-width: 415px) {
                               padding: 1em 2em;
                            }
                            .link {
                                opacity: 0;
                                transition: all 0.35s ease;
                                transform: translate3d(0, 50px, 0);
                                margin: 0 1em;
                                &:first-child {
                                    transition-delay: 0.25s;
                                }
                                &:nth-child(2) {
                                    transition-delay: 0.2s;
                                }

                            }
                        }
                    }
                }
                 
                  
                  .project-detail {
                      padding: 0.8em 1em;
                      position: relative;
                      z-index: 100;
                      background: #FFF;
                      border-bottom: 2px solid #CCC;
                      .header {
                          text-align: left;
                          border-bottom: 2px solid #4AE3B5;
                          padding-bottom: 0.5em;
                          .icon {
                             margin-left: 0.5em;
                          }
                          .detail-title {
                              font-size: 16px;
                              .detail-title-link {
                                  
                              }
                              
                          }
                          .sourceCode {
                              font-size: 14px;
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
                                      font-size: 14px;
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
                           flex-wrap: wrap;
                           align-items: center;
                           background: #004b6d;
                           .technologyContent {
                               padding: 0.3em;
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
                                      /*  background: rgba(30, 136, 229, 0.8);*/
                                        background: #39719a;
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
                                   .i-nginx {
                                       background: url(${nginx}) 50% 50%/22px no-repeat;
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