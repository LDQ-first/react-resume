import styled from 'styled-components'


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
                           .technologyContent {
                               padding: 0.5em 1em;
                               .technologyContent-link {

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