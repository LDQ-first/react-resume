import styled from 'styled-components'

const EducationDiv = styled.div`
     padding: 4em 0;
    .educationContent {
        max-width: 900px;
        margin: 0 auto;
        .title {
            text-align: center;
            color: #FFF;
            margin-bottom: 2em;
        }
        .educationWrap {
            color: #FFF;
             .education {
                margin: 1em 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .birth {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0.5em;
                    .icon {
                        margin: 1em;
                        &.yingerchezulin {
                            width: 4em; 
                            height: 4em;
                            border: 2px solid #009688;
                            fill: #009688 !important;
                        }
                    }
                    .time {
                        font-size: 18px;
                        color: #673ab7;
                    }
                }
                .college {
                    margin-left: 2em;
                    position: relative;
                    padding: 0.5em;
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        width: calc(100%);
                        height: 4px;
                        border-top-right-radius: 2px;
                        border-bottom-right-radius: 2px;
                        background: #E8646F;
                        bottom: -0.5em;
                        left: 0em; 
                    }
                    .icon {
                        &.jiaoyu01 {
                            position: absolute;
                            bottom: -2em;
                            left: -5em;
                            border: none;
                            margin: 0;
                            z-index: 10;
                            width: 4em;
                            height: 4em;
                        }
                    }
                    .time {
                         font-size: 18px;
                         text-align: right;
                         color: #673ab7;
                    }
                    .content {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        
                        .text {
                            font-size: 14px;
                        }
                        .school {

                        }
                        .major {

                        }
                        .degree {

                        }
                        .english {

                        }
                    }
                }
             }
        }
    }
    
`

export default EducationDiv