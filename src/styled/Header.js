import styled from 'styled-components'

const HeaderDiv = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    ::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        background: linear-gradient(135deg, rgba(0, 116, 247, 0.4), rgba(0, 255, 184, 0.3));
        z-index: -10;
    }
   .bgImg-list {
        position: absolute;
        height: 100vh;
        width: 100%;
        z-index: -200;
        display: flex;
        justify-content: center;
        .imglist {
            animation: even 20s linear infinite alternate;
            opacity: 0;
            position: absolute;
            transition: opacity 1.25s;
            height: 120%;
            &.hide {
                opacity: 1;
            }
            &:nth-child(odd) {
                animation: odd 8s ease infinite alternate;
            }
            @keyframes even {
               0% {
                    transform: scaleX(1)
                }
                100% {
                    transform: scale3d(1.3, 1.3, 1.3)
                }
            }
            @keyframes odd {
                0% {
                    transform: translate(0)
                }
                100% {
                    transform: translate(-5%, -2%)
                }
            }
        }    
    }

    .headerContent {
        height: 100px;
        text-align: center;
        .title {
             text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,
                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,
                    0 0 5px rgba(0,0,0,0.1),
                    0 1px 3px rgba(0,0,0,0.3);
            .name {
                color: #2196F3;
            } 
        }
        .job {

        }
    }


`

module.exports = HeaderDiv