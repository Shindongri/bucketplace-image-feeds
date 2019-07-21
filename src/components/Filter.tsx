import React from "react"
import styled from "styled-components"

import { IProps } from './Filter.spec'

import CheckedImage from "../assets/bt-checkbox-checked.svg"
import UnCheckedImage from "../assets/bt-checkbox-unchecked.svg"

const Wrap = styled.header`
  display: flex;
  margin: 30px 23px 30px;
`

const Checkbox = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`

const Text = styled.p`
  font-size: 15px;
  color: #424242;
  margin: 3px 0 2px 6px;
`

const Filter = ({ onlyScrapped, toggleScrapped }: IProps) => (
  <Wrap>
    <Checkbox src={ onlyScrapped ? CheckedImage : UnCheckedImage } onClick={ toggleScrapped } />
    <Text>스크랩한 것만 보기</Text>
  </Wrap>
)

export default Filter
