import styled from 'styled-components'

const HeaderDiv = styled.div`
    position: relative;
    overflow: hidden;  
    color: #FFF; 
    ::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        background: linear-gradient(135deg, rgba(0, 116, 247, 0.4), rgba(0, 255, 184, 0.3));
        z-index: -10;
    }
    .headerWrap {
         position: relative;
         width: 100%;
         min-height: 100vh;
         /*display: flex;
        justify-content: center;
        align-items: center;*/
    }
   .bgImg-list {
        position: absolute;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: -200;
        display: flex;
        /*justify-content: center;*/
        align-items: center;
        .imglist {
            animation: even 20s linear infinite alternate;
            opacity: 0;
            position: absolute;
            transition: opacity 1.25s;
            width: 120%;
            &.hide {
                opacity: 1;
            }
            &:nth-child(odd) {
                animation: odd 8s ease infinite alternate;
            }
            @keyframes even {
               0% {
                    transform: scaleX(1);
                }
                100% {
                    transform: scale3d(1.2, 1.2, 1.2)
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
        text-align: center;
        font-size: 1.5em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 768px) {
           width: 254px;
        }
        @media (max-width: 415px) {
            font-size: 1.2em;
            width: 200px;
        }
        .title {
            color: #EEE;
            margin-bottom: 1em;
             text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,
                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,
                    0 0 5px rgba(0,0,0,0.1),
                    0 1px 3px rgba(0,0,0,0.3);
            .name {
                color: #009bff;
            } 
        }
        .job {
            color: #FFF;
            @media (max-width: 415px) {
                font-size: 1em;
            }
        }
    }


`

module.exports = HeaderDiv