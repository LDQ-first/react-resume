import styled from 'styled-components'

const HomeDiv = styled.div`
    .goToTop {
        position: fixed;
        right: 1em;
        bottom: 1em;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        cursor: pointer;
        background: #48AAF7;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        padding: 1.2em;
        display: none;
        .show {
            display: block;
        }
    }
    
`

export default HomeDiv