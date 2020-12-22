import {IoPersonCircleSharp, IoHeartOutline, IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline} from 'react-icons/io5'

import './storyStyles.css'

import {StoryContainer, OutlinePhoto, Photo,NickName} from '../../styles/styles'

import Foto from '../../assets/foto.jpg'

export default function Storys(props) {





  return(
    <div className="container-feed">
     <div className="story">

      <StoryContainer>
        <OutlinePhoto newStory={props.newStory}>
          <Photo><IoPersonCircleSharp size="3.3rem"/></Photo>
        </OutlinePhoto>
        <NickName newStory={props.newStory}>
          {props.nickName}
        </NickName>
       
      </StoryContainer>
     </div>
     <div className="feed">
        <div className="post">
          <div className="user-picture">
            <IoPersonCircleSharp size="2.5rem" />
            <p>Nick name</p>
          </div>
          <img src={Foto} alt="User foto"/>
          <div className="actions">
            <IoHeartOutline  size="2rem" className="icon-post" />
            <IoChatbubbleOutline size="2rem" className="icon-post"/>
            <IoPaperPlaneOutline size="2rem" className="icon-post"/>
            <div className="save">

              <IoBookmarkOutline size="2rem" className="icon-save"/>
            </div>
          </div>
          <div className="likes">
          <IoPersonCircleSharp size="2rem" />
          <p>Curtido por <strong>nick_name</strong> e <strong>outras 45 pessoas</strong></p>
          </div>
          <div className="coment">
            <p><strong>nick_name</strong></p>
            <p>Legenda da foto </p>
          </div>
        </div>
     </div>
      
    </div>
  );

  }