import styled from 'styled-components'


const ProjectDiv = styled.div`
    padding: 4em 0;
    background: #364d79;
    .projectContent {
        padding: 1em 0;
        .title {
            max-width: 900px;
            margin: 0 auto;
            margin-bottom: 2em;
            text-align: center;
            color: #FFF;
        }
        .projects {
            .ant-carousel {
                outline: 1px solid lightgreen;
                width: 400px;
                margin: 0 auto;
                @media (max-width: 415px) {
                    width: 100%;
                }
            }
            .ant-carousel .slick-list {
                overflow: visible;
            }
            .ant-carousel .slick-slide {
                text-align: center;
                height: 500px;
                line-height: 500px;
                background: #364d79;
                /*overflow: hidden;*/
                
            }

            .ant-carousel .slick-slide h3 {
                color: #fff;
            }
            .ant-carousel .slick-dots {
                bottom: -24px;
            }
            .project {
              .project-item {
                  color: #FFF;
                  .img {

                  }
                  .project-detail {
                      prosition: relative;
                      &::before {
                          /*content: '';*/
                          width: 100%;
                          height: 10px;
                          background: rgba(255, 255, 255, 0.4);
                          position: absolute;
                          top: -10px;
                      }
                  }
              }
            }
        }
        
    }
    
    
`

export default ProjectDiv