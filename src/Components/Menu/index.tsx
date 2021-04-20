import { Conteiner } from './styles';
import { FiInbox } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'


export function Menu(){
    return(
        <Conteiner>

            <div className="content">

                <div className="writte">
                    <AiOutlinePlus />
                    <div className="title">
                    Escrever
                    </div>
                </div>

                <button>
                    <FiInbox size={25}/>
                    Caixa de Entrada
                </button>
                <button>
                    <FiInbox size={25}/>
                   Com Estrela
                </button>
                <button>
                    <FiInbox size={25}/>
                   Adiados
                </button>
                <button>
                    <FiInbox size={25}/>
                    Enviados
                </button>


            </div>
        </Conteiner>
    );
}