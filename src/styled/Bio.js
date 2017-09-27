import styled from 'styled-components'

const BioDiv = styled.div`
     background: #FFF;
     padding: 4em 0;
    .bioContent {
        max-width: 900px;
        margin: 0 auto;
        .title {
            text-align: center;
            margin-bottom: 1em;
        }
        .bio {
            display: flex;
            justify-content: space-around;
            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
                /*justify-content: space-around;*/
            }
            .avatarWrap {
                margin-bottom: 1em;
                .avatar {
                    outline: 1px solid red;
                    width: 134px;
                    height: 150px;
                 /*   background: url(../../static/img/ldq.jpg) no-repeat 0 0/cover; */
                }
                .content {
                    .name {

                    }
                    .job {

                    }
                }

            }
            .infoWrap {
                margin: 0 1em;
                .info-title {

                }
                .infos {

                    .info {
                        display: flex;
                        margin: 1em;
                        .icon {

                        }
                        .name {
                            margin-right: 1em;
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
    }
    
`

export default BioDiv