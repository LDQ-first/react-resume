import styled from 'styled-components'

const LoadingDiv = styled.div`
    display: inline-block;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading {
        height: 100px;
    }
    
    .loading .loader {
        position: relative;
        top: -70px;
        width: 5em;
        height: 5em;
        transform: rotate(165deg);
    }

    .loading .loader:before, .loading .loader:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 0.5em;
    transform: translate(-50%, -50%);
    }

    .loading .loader:before {
    animation: before 2s infinite;
    }
    .loading .loader:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 1em;
        box-shadow: 2em -1em rgba(225, 20, 98, 0.75),
                -2em 1em rgba(93, 81, 186, 0.75);
    }
    35% {
        width: 5em;
        box-shadow: 0 -1em rgba(225, 20, 98, 0.75),
                    0 1em rgba(93, 81, 186, 0.75);
    }
    70% {
        width: 1em;
        box-shadow: -2em -1em rgba(225, 20, 98, 0.75),
                    2em 1em rgba(93, 81, 186, 0.75);
    }
    100% {
        box-shadow: 2em -1em rgba(225, 20, 98, 0.75),
                -2em 1em rgba(93, 81, 186, 0.75);
    }
    }
    @keyframes after {
    0% {
        height: 1em;
        box-shadow: 1em 2em rgba(35, 112, 168, 0.75),
                -1em -2em rgba(233, 169, 32, 0.75);
    }
    35% {
        height: 5em;
        box-shadow: 1em 0 rgba(35, 112, 168, 0.75),
                    -1em 0 rgba(233, 169, 32, 0.75);
    }
    70% {
        height: 1em;
        box-shadow: 1em -2em rgba(35, 112, 168, 0.75),
                    -1em 2em rgba(233, 169, 32, 0.75);
    }
    100% {
        box-shadow: 1em 2em rgba(35, 112, 168, 0.75),
                -1em -2em rgba(233, 169, 32, 0.75);
    }
    }
    /*span {
        display: inline-block;
        width: 8px;
        height: 100%;
        border-radius: 4px;
        margin: 0 10px;
        background: lightgreen;
        animation: load 1s ease infinite;
    }
    @keyframes load {
        0%, 100% {
            height: 40px;
            background: lightgreen;
        }
        50% {
            height: 70px;
            margin: -15px 0;
            background: lightblue;
        }
    }
    span:nth-child(2) {
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.4s;
    }
    span:nth-child(4) {
        animation-delay: 0.6s;
    }
    span:nth-child(5) {
        animation-delay: 0.8s;
    }*/
`

const ProgressDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`



export default LoadingDiv

export {
    ProgressDiv
}