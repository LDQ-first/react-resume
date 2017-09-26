import styled from 'styled-components'

const HomeDiv = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 100vh;
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
    .home {
        max-width: 900px;
        margin: 0 auto;
       /* position: absolute;*/

    }
    .bgImg-list {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -200;
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
`

export default HomeDiv