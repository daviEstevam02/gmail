import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    max-width: 300px;

    .content{
        .writte{

            background-color: #ffffff;
            max-width: 160px;
            height:55px;
            border-radius: 50px;

            display: flex;
            align-items: center;
            justify-content:center;

            margin: 20px 0 10px 15px;

            .title{
                margin-left:10px;
                font-size: 15px;
            }
            img{
                width:35px;
            }

        }
        button{
            background: transparent;

            cursor: pointer;

            padding: 0.5rem;

            width: 100%;
            max-width:200px;

            border: none;

            display:flex;
            align-items:center;

            margin: 10px 0 0 20px;

            font-size: 17px;    
        }

        .menu-titles{
            margin-left:10px;
            font-size:16px;
        }

        .menu-buttons:hover{
            cursor: pointer;

            background-color:#ffffff;

            border-radius: 20px;
        }
    }
`;