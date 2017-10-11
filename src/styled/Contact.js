import styled from 'styled-components'

const ContactDiv = styled.div`
     padding: 4em 0;
     background: #f8faff;
    .contactContent {
        max-width: 900px;
        margin: 0 auto;
        .title {
            text-align: center;
            color: #6C73C4;
            margin-bottom: 2em;
        }
        .contactWrap {
            display: flex;
            justify-content: center;
            .contacts {
                min-width: 320px;
                padding: 1em 2em;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                @media (max-width: 860px) {
                    width: 70%;
                }
                .contact {
                    flex: 1;
                    margin: 2em 1em;
                    display: flex;
                    padding: 1em;
                    flex-direction: column;
                    transition: all 0.2s ease;
                    box-shadow: 0 0px 10px 0 rgba(62,57,107,0.2),
                                0 10px 40px 0 rgba(62,57,107,0.07),
                                0 2px 9px 0 rgba(62,57,107,0.06);
                    &:hover {
                        transform: translateY(-5px) translateZ(0);
                        box-shadow: 0 0px 10px 0 rgba(62,57,107,0.2),
                                    0 16px 32px 0 rgba(62,57,107,0.28),
                                    0 0 0 transparent;
                    }
                    .contact-title {
                        color: #6C73C4;
                        font-weight: bold;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 1em;
                        .icon {
                            font-size: 5em;
                            vertical-align: bottom;
                            border-radius: 0;
                            margin-right: 0;
                            &.shouji {
                                fill: #FA7363 !important;
                            }
                            &.wechat-copy {
                                fill: #57DC80 !important;
                            }
                            &.youxiang {
                                fill: #7F57DC !important;
                            }
                        }
                        .name {
                            display: inline-block;
                            font-size: 20px;
                        }
                        @media (max-width: 768px) {
                            .icon {
                                font-size: 4em;
                            }
                            .name {
                                font-size: 18px;
                            }
                        }
                    }
                    .contentWrap, .content {
                        display: inline-block;
                        font-size: 16px;
                        text-align: center;
                        @media (max-width: 768px) {
                           font-size: 14px;
                        }
                    }
                }
            }
        }
    }
    
`

export default ContactDiv