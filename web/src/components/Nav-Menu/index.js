import './navStyles.css'

import {IoIosSearch } from 'react-icons/io'
import {IoCompassOutline, IoHeartOutline, IoPersonCircleSharp,IoHomeOutline, IoPaperPlaneOutline} from 'react-icons/io5'


export default function navMenu() {
  return(
    <div className="container">

      <div className="container-nav">
        <div className="logo-icon">
          <h2>Instagram</h2>
        </div>
        <div className="localizar">
          <IoIosSearch size="1rem" className="icon-search"/>
          <input type="search" placeholder="Pesquisar" />
        </div>
        <div className="icons-menu">
          <ul>
            <li>
              <a href="#">
                <IoHomeOutline size="2rem" color="black" />
              </a>
            </li>
            <li>
              <a href="#">
                <IoPaperPlaneOutline size="2rem" color="black"/>
              </a>
            </li>
            <li>
              <a href="#">
                <IoCompassOutline size="2rem" color="black"/>
              </a >
            </li>
            <li>
              <a href="#">
                <IoHeartOutline size="2rem" color="black"/>
              </a>
            </li>
            
            <li>
              <a href="#">

                <div className="picture-perfil">
                  <IoPersonCircleSharp size="3rem" color="black">
                    <div>
                      <h1>Hello world</h1>
                    </div>
                  </IoPersonCircleSharp>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}