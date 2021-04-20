import { Conteiner } from './styles';
import { HiOutlineInbox } from 'react-icons/hi'
import { AiOutlineStar } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import{ FiSend } from 'react-icons/fi'


export function Menu(){
    return(
        <Conteiner>

            <div className="content">

                <button className="writte">
                    <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt=""/>
                    <p className="title">
                        Escrever
                    </p>
                </button>

                <button className="menu-buttons">
                    <HiOutlineInbox size={25}/>
                    <p className="menu-titles">
                        Caixa de Entrada
                    </p>
                </button>
                <button className="menu-buttons">
                    <AiOutlineStar size={25}/>
                    <p className="menu-titles">
                    Com Estrela
                    </p>
                </button>
                <button className="menu-buttons">
                    <BiTimeFive size={25}/>
                    <p className="menu-titles">
                        Adiados
                    </p>
                </button>
                <button className="menu-buttons">
                    <FiSend size={25}/>
                    <p className="menu-titles">
                    Enviados
                    </p>
                    
                </button>


            </div>
        </Conteiner>
    );
}