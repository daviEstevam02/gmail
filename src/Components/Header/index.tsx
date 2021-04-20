import { Conteiner } from './styles';
import  logoImg  from '../../Assets/gmailLogo.png';
import profileImg from '../../Assets/profileImg.jpeg';

import { FiMenu, FiHelpCircle, FiSettings } from 'react-icons/fi';

import{ IoApps } from 'react-icons/io5';

export function Header(){
    return(
        <Conteiner>

            <button className="menu-button">
                <FiMenu size={ 25 } color='#000'/>
            </button>

            <img  className="logo-img" src={ logoImg } alt="Gmail"/>
            <form className="search-bar" action="">
                <input type="text" placeholder="Pesquisar e-mail"/>
            </form>

            <div className="right-buttons">
                <button className="help-icon">
                <FiHelpCircle size={25} color='#000'/>
                </button>

                <button className="setting-icon">
                <FiSettings size={25} color='#000'/>
                </button>

                <button className="apps-icon">
                    <IoApps size={24} color='#000' />
                </button>

                <div className="profile-image">
                    <img src= { profileImg } alt="profile-img"/>
                </div>    
            </div>
        </Conteiner>
    );
}