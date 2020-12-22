import styled from 'styled-components';

export const StoryContainer = styled.div`
  width: 600px;
  height: 100px;
  border-color: #efefef;
  border-style: solid;
  border-width: 0.5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 7px;
  padding-bottom: 5px;


  overflow-x: visible;
`

export const OutlinePhoto = styled.div`
  width: 61px;
  height: 61px;
  border-radius: 50px;
  border-color: ${props => props.newStory ? "#e20951" : "#cccccc"};
  border-style: solid;
  border-width: ${props => props.newStory ? "1px" : "0.5px"};
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0px 20px;
`


export const Photo = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 50px;
  background-color: #cccccc;
`

export const NickName = styled.p`
  font-size: 14px;
  color: ${props => props.newStory ? "#000000": "#aaaaaa"}
`