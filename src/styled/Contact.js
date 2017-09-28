import styled from 'styled-components'

const ContactDiv = styled.div`
     padding: 4em 0;
     background: #FFF;
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
                width: 42%;
                min-width: 320px;
                padding: 1em 2em;
                .contact {
                    margin: 2em 0;
                    .contact-title {
                        color: #6C73C4;
                        font-weight: bold;
                        display: inline-block;
                        margin-right: 1em;
                        .icon {
                            font-size: 18px;
                            vertical-align: bottom;
                        }
                        .name {
                            display: inline-block;
                            font-size: 18px;
                            min-width: 70px;
                            text-align: right;
                        }
                        @media (max-width: 768px) {
                            margin-right: 0.5em;
                            .icon {
                                font-size: 16px;
                            }
                            .name {
                                font-size: 16px;
                            }
                        }
                    }
                    .contentWrap, .content {
                        display: inline-block;
                        font-size: 16px;
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