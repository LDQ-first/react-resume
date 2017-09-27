import styled from 'styled-components'

const BioDiv = styled.div`
     background: #FFF;
     padding: 4em 0;
    .bioContent {
        max-width: 900px;
        margin: 0 auto;
        @media (max-width: 768px) {
            text-align: center;
        }
        .title {
            text-align: center;
            margin-bottom: 1em;
        }
        .bio {
            display: flex;
            justify-content: space-around;
            margin-bottom: 2em;
            @media (max-width: 768px) {
                display: inline-block;
            }
            .avatarWrap {
                margin-bottom: 2em;
                padding: 1em;
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 0 4px rgba(30, 136, 229, 0.3),
                            0 2px 6px rgba(30, 136, 229, 0.5);
                .avatarContent {
                    box-shadow: 0 0 4px rgba(30, 136, 229, 0.3),
                                0 2px 6px rgba(30, 136, 229, 0.5);
                    .avatar {
                        outline: 1px solid red;
                        width: 134px;
                        height: 150px;
                    /*   background: url(../../static/img/ldq.jpg) no-repeat 0 0/cover; */
                    }
                    .content {
                        text-align: center;
                        padding: 1em;
                        .name {

                        }
                        .job {

                        }
                    }
                }
            }
            .infoWrap {
                flex: 1;
                margin: 0 1em;
                margin-bottom: 2em;
                padding: 1em;
                box-shadow: 0 0 4px rgba(30, 136, 229, 0.3),
                            0 2px 6px rgba(30, 136, 229, 0.5);
                @media (max-width: 768px) {
                    margin: 0 0 2em 0;
                }
                .info-title {
                    text-indent: 0.5em;
                }
                .infos {

                    .info {
                        display: flex;
                        margin: 1em;
                        .icon {

                        }
                        .name {
                            margin-right: 1em;
                            min-width: 60px;
                            text-align: right;
                        }
                        .content {

                        }
                        .contentWrap {
                            display: flex;
                            flex-direction: column;
                        }
                    }
                }
            }
        }
        .desWrap {
            box-shadow: 0 0 4px rgba(30, 136, 229, 0.3),
                        0 2px 6px rgba(30, 136, 229, 0.5);
            border-left: 8px solid rgba(30, 136, 229, 1);
            padding: 1em;
            @media (max-width: 768px) {
               margin: 0 2em;
            }
            .des {
                text-align: center;
            }
        }
    }
    
`

export default BioDiv