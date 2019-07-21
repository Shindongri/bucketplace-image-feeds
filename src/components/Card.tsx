import React from "react"
import styled from "styled-components"

import ScrappedImage from "../assets/on-img@2x.png"

const Wrap = styled.div`
  width: 268px;
  height: auto;
`

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`

const Nickname = styled.h3`
  font-size: 15px;
  font-weight: bold;
  line-height: 1.27;
  color: rgba(0, 0, 0, 0.74);
  margin: 10px 0 7px 10px;
`

const Container = styled.div`
  width: 100%;
  height: 268px;
  position: relative;
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

const ScrapImage = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`

interface IProps {
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

const Card = ({ image_url, nickname, profile_image_url }: IProps) => (
  <Wrap>
    <Header>
      <ProfileImage src={ profile_image_url } />
      <Nickname>{ nickname }</Nickname>
    </Header>
    <Container>
      <ThumbnailImage src={ image_url } />
      <ScrapImage src={ ScrappedImage } />
    </Container>
  </Wrap>
)

export default Card
