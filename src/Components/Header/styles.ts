import styled from 'styled-components';

export const Conteiner = styled.nav`
    width:100%;
    height: 75px;

    display:flex;
    align-items:center;

    background-color: var(--background);

    border: 1px solid #dcdce6;

    .menu-button{
        margin-left:30px;
        background-color:transparent;

        border:none;

        cursor: pointer;
    }

    .logo-img{
        max-width: 120px;
        margin-left: 30px;
    }
    .right-buttons{

        display: flex;
        align-items: center;

        button{
            background-color: transparent;
            border: none;
            
            cursor: pointer;
        }

        .help-icon{
            margin-right:25px;
        }
        .apps-icon{
            margin-left:25px;
        }
        .profile-image{

        img{
            border-radius:50%;
            height: 40px;
            width: 40px;
            margin-left:20px;
        }
    }

    }

    .search-bar{

        width: 1350px;
        margin-left: 80px;

        input{
            width: 800px;
            height: 55px;
            color:#333;
            border: 1px solid #dcdce6;
            border-radius: 10px;
            outline:none;

            padding:0 24px;
            margin:  5px;
        }
    }

   

`; 