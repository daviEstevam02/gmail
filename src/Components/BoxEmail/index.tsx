import { Conteiner, Content } from './styles';

import { FiInbox } from 'react-icons/fi'
import { MdPeople } from 'react-icons/md'
import { IoMdPricetag } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai'

export function EmailBox(){
    return(
        <Conteiner>
            <div className="header">
                    <div className="abas">
                        <div className="aba-content">
                        <FiInbox size={ 20 } color="#000"/>
                        <p>Principal</p>
                        </div>
                    </div>

                    <div className="abas">
                        <MdPeople size={ 20 } color="#000"/>
                        <p>Social</p>
                    </div>

                    <div className="abas">
                        <IoMdPricetag size={ 20 } color="#000"/>
                        <p>Promoções</p>
                    </div>
            </div>

            <Content>
                <div className="email-preview">
                    <div className="content-box">
                        <input type="checkbox" className="checkbox-button">

                        </input>

                        <button className="star-button">
                            <AiOutlineStar size={25} color="#A5A6A8"/>
                        </button>

                        <strong className="emailfrom">Infinity</strong>
                        <strong className="emailTitle">Novo projeto Comunidade</strong>
                        <p>Hoje daremos o inicio ao novo projeto da comunidade Infinity asdawsdasdwasdakhacslkjvksjvaksljvslkvsakl</p>
                    </div>

                </div>
                <div className="email-preview">
                    <div className="content-box">
                        <input type="checkbox" className="checkbox-button">

                        </input>

                        <button className="star-button">
                            <AiOutlineStar size={25} color="#A5A6A8"/>
                        </button>

                        <strong className="emailfrom">Infinity</strong>
                        <strong className="emailTitle">Novo projeto Comunidade</strong>
                        <p>Hoje daremos o inicio ao novo projeto da comunidade Infinity asdawsdasdwasdakhacslkjvksjvaksljvslkvsakl</p>
                    </div>

                </div>
                <div className="email-preview">
                    <div className="content-box">
                        <input type="checkbox" className="checkbox-button">

                        </input>

                        <button className="star-button">
                            <AiOutlineStar size={25} color="#A5A6A8"/>
                        </button>

                        <strong className="emailfrom">Infinity</strong>
                        <strong className="emailTitle">Novo projeto Comunidade</strong>
                        <p>Hoje daremos o inicio ao novo projeto da comunidade Infinity asdawsdasdwasdakhacslkjvksjvaksljvslkvsakl</p>
                    </div>

                </div>
                <div className="email-preview">

                    <div className="content-box">
                    <input type="checkbox" className="checkbox-button">

                    </input>

                    <button className="star-button">
                        <AiOutlineStar size={25} color="#A5A6A8" />
                    </button>

                    <strong className="emailfrom">Infinity</strong>
                    <strong className="emailTitle">Novo projeto Comunidade</strong>
                    <p>Hoje daremos o inicio ao novo projeto da comunidade Infinity asdawsdasdwasdakhacslkjvksjvaksljvslkvsakl</p>
                    </div>

                </div>
            </Content>
        </Conteiner>
    );
}