import styled from 'styled-components'
/*import ldq from '../../static/img/ldq.jpg'*/
import ldq from '../../static/img/pikachu.svg'


const BioDiv = styled.div`
     background: #f8faff;
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
             font-size: 2em;
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
                perspective: 1000px;
                box-shadow: 0 0 4px rgba(30, 136, 229, 0.3),
                            0 2px 6px rgba(30, 136, 229, 0.5);
                .avatarContent {
                    cursor: pointer;
                    position: relative;
                    transition: transform 0.1s;
                    background: linear-gradient(80deg, #00aeff, #3369e7);
                    /*box-shadow: 0 0 4px rgba(30, 136, 229, 0.3),
                                0 0 10px rgba(30, 136, 229, 0.4),
                                0 4px 12px rgba(30, 136, 229, 0.5);*/
                    box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4),
                                0 4px 12px rgba(51,105,231,0.4);
                    .avatar {
                        width: 161px;
                        height: 200px;
                        background: url(${ldq}) no-repeat center/90% ; 
                    }
                    .avatar-content {
                        text-align: center;
                        padding: 1em;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        .name-job {
                            transition: transform 0.1s;
                            transform: translate3d(0px, 0px, 0px);
                            margin-bottom: 0.2em;
                            text-shadow: 0 0 5px rgba(0, 132, 248, 1),
                                         0 1px 5px rgba(0, 132, 248, 1);
                        }
                        .name {
                            color: #FFF;
                        }
                        .job {
                            color: #FFF;
                            font-size: 16px;
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
                    font-size: 16px;
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
            font-size: 16px;
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