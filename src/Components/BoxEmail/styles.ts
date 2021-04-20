import styled from 'styled-components';

export const Conteiner = styled.div`

    margin: -230px 0 0 250px;
    max-width:1550px;

    background-color:#ffffff;

    .header{
        max-width: 100%;
        display: flex;
        align-items: center;

        border: 1px solid #dcdce6;
    }

    .abas{

        padding: 1.2rem 1rem;

        width: 100%;
        max-width: 250px;

        display:flex;
        align-items:center;
        

        p{
            font-size: 17px;
            margin-left: 20px;
        }
        .aba-content{
            display: flex;
            align-items:center;
            margin-left:5px;
        }
    }
    .abas:hover{
        background:#D7D9DB;
        cursor: pointer;
    }

`;

export const Content = styled.div`

    max-width:1550px;

    border: 1px solid #dcdce6;

    .email-preview{
        display:flex;
        align-items:center;
        padding: 0.6rem;

        cursor: pointer;

        width: 100%;
        .content-box{
            margin-left:10px;
            display: flex;
            align-items: center;
        }

    }
    .email-preview:hover{
        background:#D7D9DB;
        box-shadow: 0 3px 6px rgba(0,0.10,0,0.10), 0 3px 6px rgba(0,0.10,0,0.10);
    }
    p{
        margin-left:10px;
        max-width: 900px;
    }
    .star-button{
        background: transparent;
        border: none;

        cursor: pointer;
    }
    .checkbox-button{
        width: 18px;
        height:18px;

        margin: -5px 15px 0 0;

        cursor: pointer;
    }
    .emailfrom{
        margin: 0 10px 0 10px;
    }
    .emailTitle{
        margin: 0 10px 0 0;
    }
`;