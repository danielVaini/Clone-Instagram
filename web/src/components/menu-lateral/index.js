import {IoPersonCircleSharp} from 'react-icons/io5'

import './lateralMenuStyles.css'

export default function LateralMenu() {
  return(
    <div className="container-menu-lateral">
      <div className="fixed">

      <div className="container-acount">

        <div className="user-acount">
          <IoPersonCircleSharp size="4rem" />
          <div className="user-name">
            <p className="name-user">
              <strong>
                nick_name
              </strong>
            </p>
            <p>User_name</p>
          </div>
        </div>
        <a href="#">Mudar</a>
      </div>

      <div className="suggestion">
        <div className="legend">
          <p>Sugestões para Você</p>
          <a href="#">Ver tudo</a>
        </div>
        <div className="container-acount">

        <div className="user-acount">
          <IoPersonCircleSharp size="3rem" />
          <div className="user-name">
          <p className="name-user">
              <strong>
                nick_name
              </strong>
            </p>
            <p>Seguida por felipe e <br/>mais 5 pessoas</p>
          </div>
        </div>
        <a href="#">Mudar</a>
      </div>
        <div className="container-acount">

        <div className="user-acount">
          <IoPersonCircleSharp size="3rem" />
          <div className="user-name">
          <p className="name-user">
              <strong>
                nick_name
              </strong>
            </p>
            <p>Seguida por felipe e <br/>mais 5 pessoas</p>
          </div>
        </div>
        <a href="#">Mudar</a>
      </div>
        <div className="container-acount">

        <div className="user-acount">
          <IoPersonCircleSharp size="3rem" />
          <div className="user-name">
          <p className="name-user">
              <strong>
                nick_name
              </strong>
            </p>
            <p>Seguida por felipe e <br/>mais 5 pessoas</p>
          </div>
        </div>
        <a href="#">Mudar</a>
      </div>
        <div className="container-acount">

        <div className="user-acount">
          <IoPersonCircleSharp size="3rem" />
          <div className="user-name">
          <p className="name-user">
              <strong>
                nick_name
              </strong>
            </p>
            <p>Seguida por felipe e <br/>mais 5 pessoas</p>
          </div>
        </div>
        <a href="#">Mudar</a>
      </div>
        <div className="container-acount">

        <div className="user-acount">
          <IoPersonCircleSharp size="3rem" />
          <div className="user-name">
          <p className="name-user">
              <strong>
                nick_name
              </strong>
            </p>
            <p>Seguida por felipe e <br/>mais 5 pessoas</p>
          </div>
        </div>
        <a href="#">Mudar</a>
      </div>
      </div>

      </div>
    </div>
  );
}