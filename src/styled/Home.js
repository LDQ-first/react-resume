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
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,
                    rgba(0, 0, 0, 0.12) 0px 1px 4px;
        &.show {
            display: flex;
        }
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, 
                        rgba(0, 0, 0, 0.23) 0px 6px 10px;
        }
    }
    
`

export default HomeDiv