import styled from 'styled-components';

export const Conteiner = styled.div`

    margin: -240px 0 0 300px;
    max-width:1520px;

    .header{
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
        
        margin-left:15px;

        p{
            font-size: 17px;
            margin-left: 20px;
        }
    }
    .abas:hover{
        background:#D7D9DB;
        cursor: pointer;
    }

`;

export const Content = styled.div`

    max-width:1520px;

    border: 1px solid #dcdce6;

    .email-preview{
        display:flex;
        align-items:center;
        padding: 0.6rem;

        cursor: pointer;

        margin-left:20px;
    }
    .email-preview:hover{
        background:#D7D9DB;
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